import { Publisher, Subjects, TicketUpdatedEvent } from '@gadue/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}