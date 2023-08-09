// inheritance basically inherit properties and methods from a parent class to a child
// the idea is to avoid redundancty and re-utilize code
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

// Car class in inheriting from parent class Auto
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
