import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@ohbiohealth/common';

import { indexProfileRouter } from './routes/index';
import { updateProfileRouter } from './routes/update';
import { showProfileRouter } from './routes/show';
import { newOrderRouter } from './routes/neworder';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(currentUser);

app.use(indexProfileRouter);
app.use(updateProfileRouter);
app.use(showProfileRouter);
app.use(newOrderRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
