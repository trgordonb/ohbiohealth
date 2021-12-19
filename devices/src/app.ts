import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@ohbiohealth/common';
import { createDeviceRouter } from './routes/new'
import { showDeviceRouter } from './routes/show';
import { updateDeviceRouter } from './routes/update'

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
app.use(createDeviceRouter);
app.use(showDeviceRouter);
app.use(updateDeviceRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
