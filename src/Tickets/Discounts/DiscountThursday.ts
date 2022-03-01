import Ticket from '../Ticket';
import Discount from './Discount';

export default class DiscountThursday extends Discount {
    static readonly DISCOUNT_ELDERLY = 0.3;

    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }

    calculate()
    {
        if (this.typeTicket == Ticket.TYPE_ELDERLY) {
            return super.apply(DiscountThursday.DISCOUNT_ELDERLY);
        }

        return super.apply(super.DISCOUNT);
    }
}
    