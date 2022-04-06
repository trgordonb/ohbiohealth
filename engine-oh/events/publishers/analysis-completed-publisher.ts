import { Publisher, Subjects, AnalysisCompletedEvent } from '@ohbiohealth/common';

export class AnalysisCompletedPublisher extends Publisher<AnalysisCompletedEvent> {
  readonly subject = Subjects.AnalysisCompleted;
}
