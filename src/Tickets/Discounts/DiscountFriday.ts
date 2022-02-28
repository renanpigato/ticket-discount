import Discount from './Discount';

class DiscountFriday extends Discount {
    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }
}
    
module.exports = DiscountFriday;
