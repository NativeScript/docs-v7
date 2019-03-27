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

if [ -d /root/./NativeScript ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./NativeScript /www
fi
if [ -d /root/./nativescript-sdk-examples-ng ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-sdk-examples-ng /www
fi
if [ -d /root/./nativescript-sdk-examples-js ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-sdk-examples-js /www
fi
if [ -d /root/./nativescript-cli ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-cli /www
fi
if [ -d /root/./nativescript-ui-listview ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-listview /www
fi
if [ -d /root/./nativescript-ui-autocomplete ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-autocomplete /www
fi
if [ -d /root/./nativescript-ui-dataform ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-dataform /www
fi
if [ -d /root/./nativescript-ui-chart ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-chart /www
fi
if [ -d /root/./nativescript-ui-calendar ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-calendar /www
fi
if [ -d /root/./nativescript-ui-gauge ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-gauge /www
fi
if [ -d /root/./nativescript-ui-sidedrawer ]; then
	rsync --relative -az --exclude node_modules/ --exclude .git /root/./nativescript-ui-sidedrawer /www
fi

/www/docs/build/build-docs.sh
/www/docs/build/nginx-setup.sh

cd /www/docs/build/docs-watcher
npm install
node index.js & PID="$!"

while true
do
	tail -f /dev/null & wait ${!}
done