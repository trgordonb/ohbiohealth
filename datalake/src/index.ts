import { app } from './app';
import mongoose from 'mongoose'
import { natsWrapper } from './nats-wrapper';
import { ProfileSavedListener } from './events/listeners/profile-saved-listener'
import { PainConditionsSavedListener } from './events/listeners/painconditions-saved-listener'
import { PatientProfileSavedListener } from './events/listeners/patientprofile-saved-listener'
import { DiagnosisSavedListener } from './events/listeners/diagnosis-saved-listener'
import { VisitSavedListener } from './events/listeners/visit-saved-listener'
import { EntitySavedListener } from './events/listeners/entity-saved-listener'

const start = async () => {
  console.log('Starting up Datalake Service....');
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID must be defined');
  }
  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }
  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
  }
  if (!process.env.MONGO_SRV) {
    throw new Error('MONGO_SRV must be defined')
  }
  if (!process.env.MONGO_INITDB_ROOT_USERNAME) {
    throw new Error('MONGO_INITDB_ROOT_USERNAME must be defined')
  }
  if (!process.env.MONGO_INITDB_ROOT_PASSWORD) {
    throw new Error('MONGO_INITDB_ROOT_PASSWORD must be defined')
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
  } catch (err) {
    console.error(err);
  }
  new ProfileSavedListener(natsWrapper.client).listen();
  new PainConditionsSavedListener(natsWrapper.client).listen();
  new PatientProfileSavedListener(natsWrapper.client).listen();
  new EntitySavedListener(natsWrapper.client).listen();
  new VisitSavedListener(natsWrapper.client).listen();
  new DiagnosisSavedListener(natsWrapper.client).listen();

  const mongoURI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_SRV}:27017/datalake?authSource=admin`
  await mongoose.connect(mongoURI);
  console.log('Connected to MongoDb');

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
