import mongoose from 'mongoose';
import { app } from './app';
import { natsWrapper } from './nats-wrapper';
import { UserCreatedListener } from './events/listeners/user-created-listener';
import { DeviceUpdatedListener } from './events/listeners/device-updated-listener'
import { AnalysisCompletedListener } from './events/listeners/analysis-completed-listener'

const start = async () => {
  console.log('Starting up Profile Service....');
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID must be defined');
  }
  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }
  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
  }
  if (!process.env.IDENTITY_SERVICE_URL) {
    throw new Error('IDENTITY_SERVICE_URL must be defined')
  }
  if (!process.env.MONGO_SRV) {
    throw new Error('MONGO_SRV must be defined')
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    new UserCreatedListener(natsWrapper.client).listen();
    new DeviceUpdatedListener(natsWrapper.client).listen();
    new AnalysisCompletedListener(natsWrapper.client).listen();

    const mongoURI = `mongodb://${process.env.MONGO_SRV}:27017/profile`
    console.log(mongoURI)
    await mongoose.connect(mongoURI);
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
