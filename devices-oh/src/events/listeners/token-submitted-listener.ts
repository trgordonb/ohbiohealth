import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TokenSubmittedEvent } from '@ohbiohealth/common';
import { deviceTokenQueueGroupName } from './queue-group-name';
import { DeviceToken } from '../../models/devicetoken';

export class TokenSubmittedListener extends Listener<TokenSubmittedEvent> {
  subject: Subjects.PNTokenSubmitted = Subjects.PNTokenSubmitted;
  queueGroupName = deviceTokenQueueGroupName;

  async onMessage(data: TokenSubmittedEvent['data'], msg: Message) {
    const { userId, token } = data;
    console.log('Token submitted data:', [userId, token])

    let existingTokenRecord = await DeviceToken.findOne({userId})
    if (existingTokenRecord) {
      existingTokenRecord.token = token
      await existingTokenRecord.save()
    } else {
      const tokenRecord = DeviceToken.build({
        userId: userId,
        token: token
      })
      await tokenRecord.save()
    }
    
    msg.ack();
  }
}
