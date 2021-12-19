import { Message } from 'node-nats-streaming';
import { Subjects, Listener, DeviceUpdatedEvent } from '@ohbiohealth/common';
import { User } from '../../models/user';
import { deviceQueueGroupName } from './queue-group-name';

export class DeviceUpdatedListener extends Listener<DeviceUpdatedEvent> {
    subject: Subjects.DeviceUpdated = Subjects.DeviceUpdated;
    queueGroupName = deviceQueueGroupName;

    async onMessage(data: DeviceUpdatedEvent['data'], msg: Message) {
        const { userId } = data;
        const user = await User.findById(userId)
        user?.set({
            hasRegDevice: true
        })
        await user?.save()

        msg.ack();
    }
}
