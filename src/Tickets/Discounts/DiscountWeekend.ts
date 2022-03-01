import Ticket from '../Ticket';
import Discount from './Discount';

export default class DiscountWeekend extends Discount {
    static readonly DISCOUNT = 0.05;
    
    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }

    calculate()
    {
        if (this.typeTicket === Ticket.TYPE_ELDERLY) {
            return this.basePrice * DiscountWeekend.DISCOUNT;
        }

        return 0;
    }
}
