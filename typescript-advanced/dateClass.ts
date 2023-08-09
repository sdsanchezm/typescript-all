const dateExample1 = new Date();
const dateExample2 = new Date(1993, 1, 12); // 0 enero 11 dic

dateExample1.getHours();
dateExample1.getTime();
dateExample1.toISOString();

dateExample2.getHours();
dateExample2.getTime();
dateExample2.toISOString();

console.log(dateExample1);
console.log(dateExample2);

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDateExample1 = new MyDate(2021, 3, 13);

console.log(myDateExample1);
