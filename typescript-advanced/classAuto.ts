export abstract class Auto {
    constructor(protected brand: string) {}

    move() {
        console.log("Auto moving...");
    }

    getBrand() {
        return `auto is brand [${this.brand}]`;
    }

    protected turnOnLight1() {
        console.log("light1 turned on...");
    }
}

export class Car extends Auto {
    constructor(brand: string, public owner: string) {
        super(brand);
    }

    alarmTestTimes(times: number): void {
        for (let index = 0; index < times; index++) {
            console.log(` ${this.brand}`);
        }
        this.turnOnLight1();
    }

    carMove() {
        console.log("Car moving...");
        super.move();
    }
}

const car1 = new Car("chevrokel", "jamecho");
// car1.brand = 'volksgawen';
car1.alarmTestTimes(2);
// car1.turnOnLight1();
car1.carMove();
