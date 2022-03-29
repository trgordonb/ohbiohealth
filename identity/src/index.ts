import { app } from './app';

const start = async () => {
  console.log('Starting up Identity Service....');

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
