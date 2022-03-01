import Ticket from '../Ticket';

export default class Discount {
    static readonly DISCOUNT = 0;

    basePrice: number = 0;
    typeTicket: string = Ticket.TYPE_DEFAULT;

    constructor(basePrice: number, typeTicket: string)
    {
        this.basePrice = basePrice;
        this.typeTicket = typeTicket;
    }

    calculate()
    {
        return Discount.DISCOUNT;
    }

    apply(value: number | null)
    {
        return value ? (this.basePrice * value ) : 0;
    }
}
