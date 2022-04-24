FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

ENV NODE_ENV=development

