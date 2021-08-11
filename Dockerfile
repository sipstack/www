## Docker no longer used in development
## see gulp 'deploy'

FROM alpine:latest
# MAINTAINER Jonathan Geller <jgeller@sipstack.com>

RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g http-server

ADD dist/* /var/www/html
WORKDIR /var/www/html

CMD ["http-server", "-c-1"]
