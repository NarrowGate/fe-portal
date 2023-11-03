FROM node:18.17.1-alpine3.18


RUN apk --no-cache add git
RUN npm install -g pnpm@8.7.4 vite@4.4.9

USER node

RUN mkdir /home/node/mw
WORKDIR /home/node/mw

COPY --chown=node:node . .

RUN pnpm install