import Discount from './Discount';

class DiscountThursday extends Discount {
    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }
}
    
module.exports = DiscountThursday;
