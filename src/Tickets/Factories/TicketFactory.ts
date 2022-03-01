import CalendarDate from '../../CalendarDate/CalendarDate';
import Ticket from '../Ticket';
import ChildrenTicket from '../ChildrenTicket';
import StudentTicket from '../StudentTicket';
import ElderlyTicket from '../ElderlyTicket';

export default class TicketFactory {
    static create(type: string, date: CalendarDate)
    {
        switch(type) {
            case Ticket.TYPE_CHILDREN:
                return new ChildrenTicket(date);
            case Ticket.TYPE_STUDENT:
                return new StudentTicket(date);
            case Ticket.TYPE_ELDERLY:
                return new ElderlyTicket(date);
        }

        return new Ticket(date);
    }
}
