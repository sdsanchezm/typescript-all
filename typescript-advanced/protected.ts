// public access modifier are accessible from anywhere, both inside and outside the class
// protected allows to inherit properties of a class to their childs and within the same class
// private does not allow to access properties outside of a class
class Car {
    public brand: string;
    protected model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public getInfo() {
        return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
    }

    protected getPartialInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }

    private getYear() {
        return this.year;
    }
}

class ElectricCar extends Car {
    constructor(brand: string, model: string, year: number) {
        super(brand, model, year);
    }

    public showPartialInfo() {
        // Accessing protected member from a subclass
        return this.getPartialInfo();
    }
}

const myCar = new Car("Toyota", "Camry", 2022);
myCar.getInfo(); // can be accesed, it's public

// uncomment to verify: 
// myCar.getPartialInfo(); // cannot be accesed, it's protected
// myCar.getYear(); // cannot be accesed, it's private

console.log(myCar.brand); // Public field is accessible
// console.log(myCar.model); // Error, 'model' is protected and cannot be accessed outside the class
// console.log(myCar.year); // Error, 'year' is private and cannot be accessed outside the class

const electricCar = new ElectricCar("Tesla", "Model 3", 2023);
console.log(electricCar.showPartialInfo()); // Accessing protected member from subclass
// console.log(electricCar.getYear()); // Error, 'getYear' is private and cannot be accessed

