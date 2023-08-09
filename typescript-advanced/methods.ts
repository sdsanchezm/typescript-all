// methods, dont use the function keyword

class Circle1 {
    // Properties
    radius: number;

    // Constructor
    constructor(radius: number) {
        this.radius = radius;
    }

    // Method to calculate the area of the circle
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Create an instance of the Circle class
const circle = new Circle1(5);

// Call the calculateArea method
const area = circle.calculateArea();
console.log(`The area of the circle is: ${area.toFixed(2)}`);
