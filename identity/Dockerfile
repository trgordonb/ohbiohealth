FROM node:alpine

WORKDIR /app
COPY package.json .
RUN apk add --no-cache git
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]