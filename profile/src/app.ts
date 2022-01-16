import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { errorHandler, NotFoundError, currentUser } from '@ohbiohealth/common';

import { indexProfileRouter } from './routes/index';
import { updateProfileRouter } from './routes/update';
import { showProfileRouter } from './routes/show';
import { newOrderRouter } from './routes/neworder';
import { newPainRouter } from './routes/newpainconditions';

const app = express();
const corsOptions = {origin: ['https://ohbiohealth.xyz','http://localhost:3000','https://ohportal1.vercel.app'], credentials: true };
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
app.use(currentUser);

app.use(indexProfileRouter);
app.use(updateProfileRouter);
app.use(showProfileRouter);
app.use(newOrderRouter);
app.use(newPainRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
