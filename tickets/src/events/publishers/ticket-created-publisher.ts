import { Publisher, Subjects, TicketCreatedEvent } from '@gadue/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
