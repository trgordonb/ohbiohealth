import { Subjects, Publisher, DeviceBoughtEvent } from '@ohbiohealth/common';
  
export class DeviceBoughtPublisher extends Publisher<DeviceBoughtEvent> {
    subject: Subjects.DeviceBought = Subjects.DeviceBought;
}
  