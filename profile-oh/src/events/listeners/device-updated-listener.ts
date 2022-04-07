import { Message } from 'node-nats-streaming';
import { Subjects, Listener, DeviceUpdatedEvent } from '@ohbiohealth/common';
import { Profile } from '../../models/profile';
import { Device } from '../../models/device';
import { deviceQueueGroupName } from './queue-group-name';

export class DeviceUpdatedListener extends Listener<DeviceUpdatedEvent> {
  subject: Subjects.DeviceUpdated = Subjects.DeviceUpdated;
  queueGroupName = deviceQueueGroupName;

  async onMessage(data: DeviceUpdatedEvent['data'], msg: Message) {
    const { userId, deviceId, deviceType, warrantyExpireAt } = data;

    const device = Device.build({
      deviceId,
      deviceType,
      warrantyExpireAt: new Date(warrantyExpireAt)
    });
    await device.save();

    const profile = await Profile.findById(userId)

    if (!profile) {
        throw new Error('Profile not found');
    }

    if (profile.devices!.length > 0) {
        const registeredDevice = profile.devices!.find(device => device.deviceId === deviceId)
        if (registeredDevice) {
            throw new Error('Device already registered')
        }
        profile.set({
            devices: [...profile.devices!, device]
        })
    } else {
        profile.set({
            devices: [device]
        })
    }
    
    await profile.save()

    msg.ack();
  }
}
