import Discount from './Discount';

class DiscountWednesday extends Discount {
    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket);
    }
}
    
module.exports = DiscountWednesday;
