import { Publisher, Subjects, DeviceUpdatedEvent } from '@ohbiohealth/common';

export class DeviceUpdatedPublisher extends Publisher<DeviceUpdatedEvent> {
  readonly subject = Subjects.DeviceUpdated;
}
