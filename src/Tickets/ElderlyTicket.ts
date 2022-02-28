import CalendarDate from './CalendarDate/CalendarDate';
import Ticket from './Ticket';

class ElderlyTicket extends Ticket {
    readonly PRICE: number = 6;

    constructor(date: CalendarDate)
    {
        super(date, Ticket.TYPE_ELDERLY);
    }
}

module.exports = ElderlyTicket;
