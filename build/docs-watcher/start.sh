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

if [ ! -d /root/./nativescript-ui-listview ]; then
	mkdir /root/./nativescript-ui-listview

fi
if [ ! -d /root/./nativescript-ui-autocomplete ]; then
	mkdir /root/./nativescript-ui-autocomplete

fi
if [ ! -d /root/./nativescript-ui-dataform ]; then
	mkdir /root/./nativescript-ui-dataform

fi
if [ ! -d /root/./nativescript-ui-chart ]; then
	mkdir /root/./nativescript-ui-chart

fi
if [ ! -d /root/./nativescript-ui-calendar ]; then
	mkdir /root/./nativescript-ui-calendar

fi
if [ ! -d /root/./nativescript-ui-gauge ]; then
	mkdir /root/./nativescript-ui-gauge

fi
if [ ! -d /root/./nativescript-ui-sidedrawer ]; then
	mkdir /root/./nativescript-ui-sidedrawer

fi
if [ ! -d /root/./docs/ns_ui_api-reference/ns-ui-api-reference ]; then
	mkdir /root/./docs/ns_ui_api-reference/ns-ui-api-reference

fi
echo "Start copying mounted folders..."
rsync --relative -az --exclude node_modules/ --exclude .git \
	/root/./docs \
	/root/./NativeScript \
	/root/./nativescript-angular \
	/root/./nativescript-sdk-examples-ng \
	/root/./nativescript-sdk-examples-js \
	/root/./nativescript-ui-listview \
	/root/./nativescript-ui-autocomplete \
	/root/./nativescript-ui-dataform \
	/root/./nativescript-ui-chart \
	/root/./nativescript-ui-calendar \
	/root/./nativescript-ui-gauge \
	/root/./nativescript-ui-sidedrawer \
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