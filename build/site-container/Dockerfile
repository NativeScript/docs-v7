FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

ADD site /usr/share/nginx/html

ADD site/nginx.conf /etc/nginx

RUN rm /etc/nginx/conf.d/default.conf \
  && echo "online" > /usr/share/nginx/html/_status.txt \
  && rm /usr/share/nginx/html/nginx.conf \
  && sed -i -e 's/\/www\/docs\/build\/bin\/site/\/usr\/share\/nginx\/html/g' /etc/nginx/nginx.conf

EXPOSE 8080
