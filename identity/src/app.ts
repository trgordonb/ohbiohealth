import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from '@ohbiohealth/common';

import { identityRouter } from './routes/index';

const app = express();
app.use(json());
app.use(identityRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
