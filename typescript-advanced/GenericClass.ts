// Box class is a generic class
// The T in <T> is a type parameter that allows you to specify the type of the value
// when creating an instance of Box a specific type argument within angle brackets (<...>) to specify the type of the value
// Box<number> creates a box that holds numbers
// Box<string> creates a box that holds strings
// getValue and setValue work with the generic type T
// generics classes allows to create reusable classes that work withmultiple data types

class Box<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }
}

// Creating instances of the Box class with number type
const numberBox = new Box<number>(21);
console.log(numberBox.getValue()); // 21

// Creating instances of the Box class with string type
const stringBox = new Box<string>("Hello, I am using string as type!");
console.log(stringBox.getValue()); // Hello, I am using string as type!
