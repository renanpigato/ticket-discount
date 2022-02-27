import Ticket from './Ticket';

class ChildrenTicket extends Ticket {
    readonly PRICE: number = 5.5;

    constructor(date: Date)
    {
        super(date, Ticket.TYPE_CHILDREN);
    }
}

module.exports = ChildrenTicket;
