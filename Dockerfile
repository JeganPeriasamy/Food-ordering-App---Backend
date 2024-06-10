FROM node:22.2-alpine3.20

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

CMD [ "npm","run","server" ]