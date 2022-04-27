FROM node:alpine

ENV MAILCHIMP_URL=https://ensembletechs.us20.list-manage.com/subscribe/post?u=28653a604c74efc74ca707df0&amp;id=043676552b
ENV YOUTUBE_PLAYLIST_ITEMS_API=https://www.googleapis.com/youtube/v3/playlistItems
ENV YOUTUBE_API_KEY=AIzaSyC-AJHuRDgssX-2Hu-UsXU8QCnSCPNmKJg
ENV YOUTUBE_CHANNELID=PLtmKTJS0Kkqw945sc38zAkI5HEqLGm49i
ENV CLOUDINARY_CLOUD=dqmqirs5h
ENV CLOUDINARY_PRESET=fppkpzyu
ENV ECWID_STOREID=67812829
ENV STRIPE_PUBLISHABLE_KEY=pk_test_51KNcqvHeckYyuEvC3Fgnh3zPNIJqCwiJyFni34mHmvoBvKDxK19vMtEgxrWTalEwpW1yeGdJp2fbhCUaXKelTMtI00nBHj6EuG
ENV STRIPE_SECRET_KEY=sk_test_51KNcqvHeckYyuEvCDlauwPbCRYHUy0qsGdRNIAxDbvO8vozJ6n1TQmRePky2Qt3qCZy6nRQnuwAmvMg9C2mVQLU200g9BPwvzg
ENV WC_CONSUMER_KEY=ck_f51aef3198e122540bf844df9d48080dc6728c85
ENV WC_CONSUMER_SECRET=cs_31e968bc34073092a3042a6904ac34f336b971a4
ENV STRIPE_WEBHOOK_ENDPOINT_SECRET=whsec_hI6b42fp9WmLvisBjZUdBFUpZr7VcB01
ENV WORDPRESS_URL=https://ohbiohealth.shop
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --legacy-peer-deps

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build

CMD ["npm", "run", "start"]