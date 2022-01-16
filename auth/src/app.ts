import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler, NotFoundError } from '@ohbiohealth/common';

const app = express();
const corsOptions = {
  origin: ['https://ohbiohealth.xyz','http://localhost:3000','https://ohportal1.vercel.app'], 
  credentials: true,
  allowedHeaders: ['Content-Type','Authorization','Cookie','Accept','Accept-Language','X-Requested-With','Origin','Host']
};
app.set('trust proxy', true);
app.use(json());
app.use(cors(corsOptions));
app.use(
  cookieSession({
    signed: false,
    secure: true,
    sameSite: 'none'
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
