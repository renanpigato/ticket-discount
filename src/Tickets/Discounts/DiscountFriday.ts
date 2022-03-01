import Ticket from '../Ticket';
import Discount from './Discount';

export default class DiscountFriday extends Discount {
    static readonly DISCOUNT_CHILDREN = 0.11;

    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }

    calculate()
    {
        if (this.typeTicket == Ticket.TYPE_CHILDREN) {
            return super.apply(DiscountFriday.DISCOUNT_CHILDREN);
        }

        return super.apply(super.DISCOUNT);
    }
}
