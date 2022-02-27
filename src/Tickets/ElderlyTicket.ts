import Ticket from './Ticket';

class ElderlyTicket extends Ticket {
    readonly PRICE: number = 6;

    constructor(date: Date)
    {
        super(date, Ticket.TYPE_ELDERLY);
    }
}

module.exports = ElderlyTicket;
