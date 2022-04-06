import { Message } from 'node-nats-streaming';
import { Subjects, Listener, ProfileCompletedEvent } from '@ohbiohealth/common';
import { User } from '../../models/user';
import { authQueueGroupName } from './queue-group-name';

export class ProfileCompletedListener extends Listener<ProfileCompletedEvent> {
    subject: Subjects.ProfileCompleted = Subjects.ProfileCompleted;
    queueGroupName = authQueueGroupName;

    async onMessage(data: ProfileCompletedEvent['data'], msg: Message) {
        const { userId } = data;
        const user = await User.findById(userId)
        user?.set({
            hasProvidedInfo: true
        })
        await user?.save()

        msg.ack();
    }
}
