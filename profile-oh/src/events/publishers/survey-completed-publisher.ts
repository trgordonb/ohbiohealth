import { Publisher, Subjects, SurveyCompletedEvent } from '@ohbiohealth/common';

export class SurveyCompletedPublisher extends Publisher<SurveyCompletedEvent> {
  readonly subject = Subjects.SurveyCompleted;
}
