FROM node:alpine

ENV MAILCHIMP_URL=https://ensembletechs.us20.list-manage.com/subscribe/post?u=28653a604c74efc74ca707df0&amp;id=043676552b
ENV CLOUDINARY_CLOUD=dqmqirs5h
ENV CLOUDINARY_PRESET=fppkpzyu
ENV STRIPE_PUBLISHABLE_KEY=pk_test_51KNcqvHeckYyuEvC3Fgnh3zPNIJqCwiJyFni34mHmvoBvKDxK19vMtEgxrWTalEwpW1yeGdJp2fbhCUaXKelTMtI00nBHj6EuG
ENV STRIPE_SECRET_KEY=sk_test_51KNcqvHeckYyuEvCDlauwPbCRYHUy0qsGdRNIAxDbvO8vozJ6n1TQmRePky2Qt3qCZy6nRQnuwAmvMg9C2mVQLU200g9BPwvzg
ENV WC_CONSUMER_KEY=ck_a38121555260c4ba969e88547188ae43c4503eb2
ENV WC_CONSUMER_SECRET=cs_ab46d670023a77baa282ecd4e2456d6dbbafe2d7
ENV STRIPE_WEBHOOK_ENDPOINT_SECRET=whsec_hI6b42fp9WmLvisBjZUdBFUpZr7VcB01
ENV WORDPRESS_URL=https://ensemble-tech.shop

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