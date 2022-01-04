FROM node:alpine

ENV MAILCHIMP_URL=https://ensembletechs.us20.list-manage.com/subscribe/post?u=28653a604c74efc74ca707df0&amp;id=043676552b
ENV YOUTUBE_PLAYLIST_ITEMS_API=https://www.googleapis.com/youtube/v3/playlistItems
ENV YOUTUBE_API_KEY=AIzaSyC-AJHuRDgssX-2Hu-UsXU8QCnSCPNmKJg
ENV YOUTUBE_CHANNELID=PLtmKTJS0Kkqw945sc38zAkI5HEqLGm49i
ENV CLOUDINARY_CLOUD=dqmqirs5h
ENV CLOUDINARY_PRESET=fppkpzyu
ENV ECWID_STOREID=67812829

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build

CMD ["npm", "run", "start"]