import CalendarDate from '../../CalendarDate/CalendarDate';
import Ticket from '../Ticket';
import StudentTicket from '../StudentTicket';

export default class TicketFactory {
    static create(date: CalendarDate, type: string)
    {
        type = type ?? Ticket.TYPE_DEFAULT;

        switch(type) {
            case Ticket.TYPE_STUDENT:
                return new StudentTicket(date);
        }

        return new Ticket(date, type);
    }
}
