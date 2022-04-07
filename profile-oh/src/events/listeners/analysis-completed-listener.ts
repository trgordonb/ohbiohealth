import { Message } from 'node-nats-streaming';
import { Subjects, Listener, AnalysisCompletedEvent, NotFoundError, BadRequestError } from '@ohbiohealth/common';
import { Profile } from '../../models/profile';
import { PainConditions } from '../../models/painconditions';
import { deviceQueueGroupName } from './queue-group-name';

export class AnalysisCompletedListener extends Listener<AnalysisCompletedEvent> {
  subject: Subjects.AnalysisCompleted = Subjects.AnalysisCompleted;
  queueGroupName = deviceQueueGroupName;

  async onMessage(data: AnalysisCompletedEvent['data'], msg: Message) {
    const { userId, muscleache, burningsensation, numbsensation, needlesensation, painpositions, diagnosis } = data;
    const profile = await Profile.findById(userId);

    if (!profile) {
        throw new NotFoundError()
    }

    const exitstingPainConditions = await PainConditions.findById(profile.painconditions);
    if (exitstingPainConditions) {
      console.log('Already done analysis');
      exitstingPainConditions.muscleache = muscleache
      exitstingPainConditions.needlesensation = needlesensation
      exitstingPainConditions.burningsensation = burningsensation
      exitstingPainConditions.numbsensation = numbsensation
      exitstingPainConditions.painpositions = painpositions
      exitstingPainConditions.diagnosis = diagnosis
      await exitstingPainConditions.save()
      msg.ack();
    } else {
      const painConditions = PainConditions.build({
        muscleache: muscleache,
        needlesensation: needlesensation,
        burningsensation: burningsensation,
        numbsensation: numbsensation,
        painpositions: painpositions,
        diagnosis: diagnosis
      });
      try {
        await painConditions.save();
        profile.set({
          painconditions: painConditions._id
        })
        await profile.save()
        console.log(profile)
      } catch (err) {
        console.error(err)
      }
      msg.ack();
    }
  }
}
