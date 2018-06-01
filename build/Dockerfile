FROM ruby:2.3.5-alpine3.4

RUN mkdir /www

COPY docs-watcher/start.sh /
COPY Gemfile /www/

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
  && rm -rf /var/cache/apk/*

RUN npm config set cache /var --global \
  && npm install -g grunt \
  && mkdir /run/nginx \
  && chmod +x /start.sh \
  && echo "Symlinking folders..." \
  && ln -s /root/docs /www/docs \
  && ln -s /root/NativeScript /www/NativeScript \
  && ln -s /root/nativescript-angular /www/nativescript-angular \
  && ln -s /root/nativescript-sdk-examples-ng /www/nativescript-sdk-examples-ng \
  && ln -s /root/nativescript-sdk-examples-js /www/nativescript-sdk-examples-js \
  && ln -s /root/sidekick-docs /www/sidekick-docs \
  && ln -s /root/nativescript-cli /www/nativescript-cli

RUN cd /www \
  && bundle install \
  && bundle config build.nokogiri --use-system-libraries

ENTRYPOINT [ "/start.sh" ]

EXPOSE 8080
EXPOSE 35729
