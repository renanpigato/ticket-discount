import Ticket from '../Ticket';
import CalendarDate from './CalendarDate/CalendarDate';
class Discount {
    basePrice: number = 0;
    typeTicket: string = Ticket.TYPE_DEFAULT;

    constructor(basePrice: number, typeTicket: string)
    {
        this.basePrice = basePrice;
        this.typeTicket = typeTicket;
    }

    calculate()
    {
        return 0;
    }
}

module.exports = Discount;
