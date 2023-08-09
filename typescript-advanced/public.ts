// public: Members marked as public are accessible from anywhere, both within the class and from external code
class Person1 {
    public name: string; // Public property

    constructor(name: string) {
        this.name = name;
    }

    public greet() {
        return `Hello, my name is ${this.name}.`;
    }
}

const person = new Person1("Jamecho");
console.log(person.name); // Accessing public property
console.log(person.greet()); // Calling public method
