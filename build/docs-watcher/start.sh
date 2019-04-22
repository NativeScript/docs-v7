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

mkdir -p /www

echo "Start copying mounted folders..."

rsync --relative -az --exclude node_modules/ --exclude .git \
	/root/./docs \
	/root/./nativescript-angular \
	/www

[ ! -d /root/./NativeScript ] || rsync --relative -az --exclude node_modules/ --exclude .git /root/./NativeScript /www
[ ! -d /root/./nativescript-sdk-examples-ng ] || rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-sdk-examples-ng /www
[ ! -d /root/./nativescript-sdk-examples-js ] || rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-sdk-examples-js /www
[ ! -d /root/./nativescript-cli ] || rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-cli /www
[ ! -d /root/./nativescript-ui-samples ] || rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-samples /www
[ ! -d /root/./nativescript-ui-samples-angular ] || rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-samples-angular /www
[ ! -d /root/./nativescript-ui-samples-vue ] || rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-samples-vue /www

/www/docs/build/build-docs.sh
/www/docs/build/nginx-setup.sh

cd /www/docs/build/docs-watcher
npm install
node index.js & PID="$!"

while true
do
	tail -f /dev/null & wait ${!}
done