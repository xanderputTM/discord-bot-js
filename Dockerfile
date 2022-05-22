# very lightweight OS
FROM node:lts-alpine

RUN mkdir -p /usr/src/discord-bot
WORKDIR /usr/src/discord-bot

COPY package*.json ./

RUN npm install

COPY . . 

CMD ["node", "./bot/index.js"]