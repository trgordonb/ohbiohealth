import express from 'express';
import { errorHandler } from '@ohbiohealth/common';

const app = express();
app.set('trust proxy', true);
app.all('*', async (req, res) => {
  res.status(200).json({result: 'ok'})
});

app.use(errorHandler);

export { app };
