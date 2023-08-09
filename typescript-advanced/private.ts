// private this access modifier are only accessible from within the class that defines them
// cannot be accessed from outside the class
class Example {
    private privateProperty: string;

    constructor() {
        this.privateProperty = "I am private.";
    }

    printPrivateProperty() {
        console.log(this.privateProperty); // Accessing a private property within the class
    }
}

const instance = new Example();
// console.log(instance.privateProperty); // Error: Cannot access private property
instance.printPrivateProperty(); // Calling a method that accesses the private property
