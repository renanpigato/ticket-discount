import CalendarDate from './CalendarDate/CalendarDate';
import Ticket from './Ticket';

export default class ChildrenTicket extends Ticket {
    readonly PRICE: number = 5.5;

    constructor(date: CalendarDate)
    {
        super(date, Ticket.TYPE_CHILDREN);
    }
}
