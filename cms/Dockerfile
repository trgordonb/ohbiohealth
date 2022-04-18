FROM node:14

WORKDIR /app
ADD ./package.json /app
RUN npm install --only=prod

ADD . /app
RUN npm run build
EXPOSE 1337

CMD ["npm", "run", "develop"]