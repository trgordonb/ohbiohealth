import { Message } from 'node-nats-streaming';
import { Subjects, Listener, AnalysisCompletedEvent, NotFoundError, BadRequestError } from '@ohbiohealth/common';
import { Profile } from '../../models/profile';
import { PainConditions } from '../../models/painconditions';
import { deviceQueueGroupName } from './queue-group-name';

export class AnalysisCompletedListener extends Listener<AnalysisCompletedEvent> {
  subject: Subjects.AnalysisCompleted = Subjects.AnalysisCompleted;
  queueGroupName = deviceQueueGroupName;

  async onMessage(data: AnalysisCompletedEvent['data'], msg: Message) {
    const { userId, muscleache, burningsensation, numbsensation, needlesensation, spinalpos, diagnosis } = data;
    const profile = await Profile.findOne({ userId });

    if (!profile) {
        throw new NotFoundError()
    }

    const exitstingPainConditions = await PainConditions.findById(userId);
    if (exitstingPainConditions) {
      console.log('Already done analysis');
      msg.ack();
    } else {
      const painConditions = PainConditions.build({
        _id: userId,
        muscleache: muscleache,
        needlesensation: needlesensation,
        burningsensation: burningsensation,
        numbsensation: numbsensation,
        spinalpos: spinalpos,
        diagnosis: diagnosis
      });
      try {
        await painConditions.save();
        profile.set({
          painConditions: userId
        })
        await profile.save()
      } catch (err) {
        console.error(err)
      }
      msg.ack();
    }
  }
}
