import mongoose from 'mongoose';
import { adminExists } from './services/check';
import { addAdmin } from './services/setup';
import { natsWrapper } from './nats-wrapper';
import { ProfileCompletedListener } from './events/listeners/profile-completed-listener'
import { DeviceUpdatedListener } from './events/listeners/device-updated-listener'
import { DeviceBoughtListener } from './events/listeners/device-bought-listener'
import { SurveyCompletedListener } from './events/listeners/survey-completed-listener'

import { app } from './app';

const start = async () => {  
  console.log("Starting...")
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  if (!process.env.ADMIN_PASSWORD) {
    throw new Error('ADMIN_PASSWORD not defined');
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

    new ProfileCompletedListener(natsWrapper.client).listen();
    new DeviceUpdatedListener(natsWrapper.client).listen();
    new DeviceBoughtListener(natsWrapper.client).listen();
    new SurveyCompletedListener(natsWrapper.client).listen();

    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDb');

    const isAdminExists = await adminExists();
    if (isAdminExists) {
      console.log('Admin user exists');
    } else {
      console.log('Admin user absent, adding one ...');
      await addAdmin();
      console.log('Admin user sucessfully added');
    }
  } catch (err) {
    console.error(err);
  }



  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
