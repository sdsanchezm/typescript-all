// another example of setters and getters
// get and set are keywords used in typescript in this case
export class MyDateExample {
    constructor(
        public year: number = 1945,
        private _month: number = 1,
        private _day: number = 1
    ) {}

    printFormatted(): string {
        const day = this.addPaddingToDate(this._day);
        const month = this.addPaddingToDate(this._month);
        return `${day}/${month}/${this.year}`;
    }

    private addPaddingToDate(item: number) {
        if (item < 10) {
            return `0${item}`;
        }
        return `${item}`;
    }

    add(value: number, type: "days" | "months" | "years") {
        if (type === "days") {
            this._day += value;
        }
        if (type === "months") {
            this._month += value;
        }
        if (type === "years") {
            this.year += value;
        }
    }

    get day() {
        return this._day;
    }

    get validateLeapYear(): boolean {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }

    get month() {
        return this._month;
    }

    set month(newMonthValue: number) {
        if (newMonthValue >= 1 && newMonthValue <= 12) {
            this._month = newMonthValue;
        } else {
            throw new Error("entered month is out of range");
        }
    }
}

// create a new Date Object
const myDateExample1 = new MyDateExample(2000, 11, 11);
console.log(myDateExample1.printFormatted());

// using the setter month
myDateExample1.month = 4;
console.log("run", myDateExample1.month);

// using the setter month
myDateExample1.month = 78;
console.log(myDateExample1.month);

