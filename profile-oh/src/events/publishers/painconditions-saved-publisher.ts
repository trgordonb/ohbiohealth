import { Publisher, Subjects, PainConditionsSavedEvent } from '@ohbiohealth/common';

export class PainConditionsSavedPublisher extends Publisher<PainConditionsSavedEvent> {
  readonly subject = Subjects.PainConditionsSaved;
}
