#!/bin/bash
set -e

PID=0
sigterm_handler() {
	echo "Caught SIGTERM signal! Shutting down..."
	if [ $PID -ne 0 ]; then
		kill -SIGTERM "$PID"
		wait "$PID"
	fi
	exit 143; # 128 + 15 -- SIGTERM
}

sigint_handler() {
	echo "Caught SIGINT signal! Shutting down..."
	if [ $PID -ne 0 ]; then
		kill -SIGTERM "$PID"
		wait "$PID"
	fi
	exit 130; # 128 + 2 -- SIGINT
}

trap 'kill ${!}; sigterm_handler' SIGTERM
trap 'sigint_handler' SIGINT

mkdir /www

if [ ! -d /root/./nativescript-ui ]; then
	mkdir /root/./nativescript-ui \
	/root/./nativescript-ui-samples \
	/root/./nativescript-ui-samples-angular

fi
echo "Start copying mounted folders..."
rsync --relative -az --exclude node_modules/ \
	/root/./docs \
	/root/./NativeScript \
	/root/./nativescript-angular \
	/root/./nativescript-sdk-examples-ng \
	/root/./nativescript-sdk-examples-js \
	/root/./nativescript-ui \
	/root/./nativescript-ui-samples \
	/root/./nativescript-ui-samples-angular \
	/root/./nativescript-cli \
	/www

/www/docs/build/build-docs.sh
/www/docs/build/nginx-setup.sh

cd /www/docs/build/docs-watcher
npm install
node index.js & PID="$!"

while true
do
	tail -f /dev/null & wait ${!}
done