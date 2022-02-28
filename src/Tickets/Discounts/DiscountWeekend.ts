import Ticket from '../Ticket';
import Discount from './Discount';

class DiscountWeekend extends Discount {
    static readonly DISCOUNT = 0.05;
    
    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }

    calculate()
    {
        console.log('DiscountWeekend - calculate'
            ,this.typeTicket
            ,this.basePrice
            ,DiscountWeekend.DISCOUNT
            ,Ticket.TYPE_ELDERLY
            ,this.DISCOUNT
            ,this
        )
        if (this.typeTicket === Ticket.TYPE_ELDERLY) {
            return this.basePrice * DiscountWeekend.DISCOUNT;
        }

        return 0;
    }
}
    
module.exports = DiscountWeekend;
