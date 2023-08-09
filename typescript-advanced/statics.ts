// static, allows to use methods without instantiate the class
// readonly is made only for properties not for methods
console.log("Math.PI", Math.PI);

console.log("Math.max", Math.max(7, 7, 6, 5, 4, 3, 6, 7, 8, 8));

class MyMathExample {
    static readonly PI = 3.14;

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => (max >= item ? max : item), 0);
        // return numbers.reduce((max, item) => max > item ? max : item);
    }
}

console.log("MyMathExample.PI", MyMathExample.PI);
console.log("MyMathExample.max", MyMathExample.max(456, 7, 6, 345, 567));

const numbers = [2, 20, 4, 1111, 90, 8000];
console.log("MyMathExample.max", MyMathExample.max(...numbers));
console.log("MyMathExample.max", MyMathExample.max(-12, -90, -1));
