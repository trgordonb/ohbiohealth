import request from 'supertest';
import { app } from '../../app';
import { Device } from '../../models/device';
import { natsWrapper } from '../../nats-wrapper';

it('has a route handler listening to /api/devices for post requests', async () => {
    const response = await request(app).post('/api/devices').send({});

    expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
    await request(app).post('/api/devices').send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
        .post('/api/devices')
        .set('Cookie', global.signin())
        .send({});
  
    expect(response.status).not.toEqual(401);
  });

it('returns an error if an invalid deviceId is provided', async () => {
    await request(app)
    .post('/api/devices')
    .set('Cookie', global.signin())
    .send({
      deviceId: '',
      deviceType: '',
    })
    .expect(400);

  await request(app)
    .post('/api/devices')
    .set('Cookie', global.signin())
    .send({
      deviceType: 'BM',
    })
    .expect(400);
});

it('creates a device with valid inputs', async () => {
    let devices = await Device.find({});
    expect(devices.length).toEqual(0);

    const deviceId = 'asldkfj';
    const deviceType = 'BM';

    await request(app)
        .post('/api/devices')
        .set('Cookie', global.signin())
        .send({
            deviceId,
            deviceType
        })
        .expect(201);

    devices = await Device.find({});
    expect(devices.length).toEqual(1);
    expect(devices[0].deviceId).toEqual(deviceId);
    expect(devices[0].deviceType).toEqual(deviceType);
});

/**it('publishes an event', async () => {
  const deviceId = 'asldkfj';
  const deviceType = 'BM';

  await request(app)
    .post('/api/devices')
    .set('Cookie', global.signin())
    .send({
      deviceId,
      deviceType
    })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});*/
