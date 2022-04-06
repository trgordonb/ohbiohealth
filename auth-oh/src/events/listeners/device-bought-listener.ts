import { Message } from 'node-nats-streaming';
import { Subjects, Listener, DeviceBoughtEvent } from '@ohbiohealth/common';
import { User } from '../../models/user';
import { deviceQueueGroupName } from './queue-group-name';

export class DeviceBoughtListener extends Listener<DeviceBoughtEvent> {
    subject: Subjects.DeviceBought = Subjects.DeviceBought;
    queueGroupName = deviceQueueGroupName;

    async onMessage(data: DeviceBoughtEvent['data'], msg: Message) {
        const { email } = data;
        const user = await User.findOne({email: email})
        user?.set({
            hasBoughtDevice: true
        })
        await user?.save()

        msg.ack();
    }
}
