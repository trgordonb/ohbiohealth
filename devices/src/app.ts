import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { errorHandler, NotFoundError, currentUser } from '@ohbiohealth/common';
import { createDeviceRouter } from './routes/new'
import { showDeviceRouter } from './routes/showdevice';
import { showProofRouter } from './routes/showproof';
import { updateDeviceRouter } from './routes/updatedevice'
import { updateProofRouter } from './routes/updateproof'

const app = express();
app.set('trust proxy', true);
const corsOptions = {
  origin: ['https://ohbiohealth.xyz','http://localhost:3000','https://ohportal1.vercel.app'], 
  credentials: true,
  allowedHeaders: ['Content-Type','Authorization', 'x-csrf-token','X-Requested-With', 'X-HTTP-Method-Override']
};
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
