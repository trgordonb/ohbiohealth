import { Message } from 'node-nats-streaming';
import { Subjects, Listener, UserCreatedEvent } from '@ohbiohealth/common';
import { Profile } from '../../models/profile';
import { profileQueueGroupName } from './queue-group-name';

export class UserCreatedListener extends Listener<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
  queueGroupName = profileQueueGroupName;

  async onMessage(data: UserCreatedEvent['data'], msg: Message) {
    const { userId, email } = data;
    console.log('UserCreatedEvent data:', [userId, email])

    const profile = Profile.build({
      userId,
      email
    });
    await profile.save();

    msg.ack();
  }
}
