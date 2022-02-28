class CalendarDate {
    _date: Date;
    _dayOf: boolean = false;

    constructor(date: Date, dayOf: boolean | null)
    {
        this._date = date;

        if (dayOf === true) {
            this._dayOf = dayOf;
        }
    }

    set date(date: Date)
    {
        this._date = date;
    }

    get date(): Date
    {
        return this._date;
    }

    set dayOf(dayOf: boolean)
    {
        this._dayOf = dayOf;
    }

    isDayOf(): boolean
    {
        return this._dayOf;
    }
}

module.exports = CalendarDate;