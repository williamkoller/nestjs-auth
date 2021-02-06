FROM node:12.20.0-alpine3.12

RUN apk add --no-cache bash 

RUN npm i -g @nestjs/cli

RUN npm i 

USER node

WORKDIR /home/node/app