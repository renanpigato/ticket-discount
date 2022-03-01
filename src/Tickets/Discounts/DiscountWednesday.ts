import Ticket from '../Ticket';
import Discount from './Discount';

export default class DiscountWednesday extends Discount {
    static readonly DISCOUNT_CHILDREN = 0.3;
    static readonly DISCOUNT_ELDERLY = 0.4;

    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket);
    }

    calculate()
    {
        if (this.typeTicket == Ticket.TYPE_CHILDREN) {
            return super.apply(DiscountWednesday.DISCOUNT_CHILDREN);
        }

        if (this.typeTicket == Ticket.TYPE_ELDERLY) {
            return super.apply(DiscountWednesday.DISCOUNT_ELDERLY);
        }

        return 0;
    }
}
