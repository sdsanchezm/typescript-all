// is a way to modify properties without accessign it directly
class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    get diameter(): number {
        return this.radius * 2;
    }

    set diameter(value: number) {
        if (value >= 0) {
            this.radius = value / 2;
        } else {
            throw new Error("Diameter must be non-negative.");
        }
    }

    get area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const myCircle = new Circle(5);

console.log(myCircle.diameter); // Using getter
myCircle.diameter = 10; // Using setter
// console.log(myCircle.radius); // Error here, 'radius' is private and cannot be accessed directly
console.log(myCircle.area); // Using another getter
