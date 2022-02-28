import Discount from './Discount';

class DiscountTueday extends Discount {
    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }
}

module.exports = DiscountTueday;
