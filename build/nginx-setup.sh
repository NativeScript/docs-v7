#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
NGINX_CONFIG=$SCRIPT_PATH"/bin/site/nginx.conf"

cp $NGINX_CONFIG /etc/nginx
nginx
