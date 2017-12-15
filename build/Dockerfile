FROM ruby:2.3.5-alpine3.4

COPY docs-watcher/start.sh /

RUN apk add --update \
  bash \
  bash-completion \
  build-base \
  libxml2-dev \
  libxslt-dev \
  git \
  rsync \
  nginx \
  nodejs \
  && rm -rf /var/cache/apk/* \
  && npm install -g grunt \
  && mkdir /run/nginx \
  && chmod +x /start.sh

ENTRYPOINT [ "/start.sh" ]

EXPOSE 9192
