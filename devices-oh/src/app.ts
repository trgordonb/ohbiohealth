import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@ohbiohealth/common';
import { createDeviceRouter } from './routes/new'
import { showDeviceRouter } from './routes/showdevice';
import { showProofRouter } from './routes/showproof';
import { updateDeviceRouter } from './routes/updatedevice'
import { updateProofRouter } from './routes/updateproof'

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
app.use(showProofRouter);
app.use(updateDeviceRouter);
app.use(updateProofRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
