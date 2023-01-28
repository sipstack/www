FROM alpine:latest
# FROM node:13-alpine
# MAINTAINER Jonathan Geller <jgeller@sipstack.com>

COPY package*.json ./
RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN npm install -g http-server

COPY dist/ /var/www/html/
WORKDIR /var/www/html

EXPOSE 3000
CMD ["http-server", "-c-1", "--log-ip","--no-dotfiles","-p3000"]

# NOTE: PORT to link 
# docker run --rm -it -p 8082:8080 localhost:5000/hub:0.1.1