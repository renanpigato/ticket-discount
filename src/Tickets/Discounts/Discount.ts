import Ticket from './Ticket';
class Discount {
    basePrice: number = 0;
    date: Date;
    typeTicket: string = Ticket.TYPE_DEFAULT;

    constructor(basePrice: number, date: Date, typeTicket: string)
    {
        this.basePrice = basePrice;
        this.date = date;
        this.typeTicket = typeTicket;
    }

    calculate()
    {
        const discount = this.basePrice * 0.1;

        return discount;
    }
}

module.exports = Discount;
