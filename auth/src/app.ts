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
const corsOptions = {origin: ['https://ohbiohealth.xyz','http://localhost:3000'], credentials: true };
app.set('trust proxy', true);
app.use(json());
app.use(cors(corsOptions));
app.use(
  cookieSession({
    signed: false,
    secure: false
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
