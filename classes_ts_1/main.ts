
// crating the Animal class 
export class Animal {
    // constructor(public name: string) {} // it can be public
    constructor(protected name: string) {}

    move () {
        console.log('moving now!');
    }

    greeting (){
        return `Hi, i am ${this.name}`
    }

    protected doSomething(){
        console.log("doing something");
    }
}

// Inheritance of Animal, using extends
export class Dog extends Animal {

    // owner: string;

    constructor(
        public owner: string,
        name: string
        ){
            // name comes from the Animal class, this is jsut to pass to the heritance constructor
            // super can be called from the constructor ofthe child, from here
            super(name); 
        }

    barking(barktimes: number){
        for (let index = 0; index < barktimes; index++) {
            console.log(`hey! ${this.name}`);
        }
        this.doSomething();
    }

    move(){
        console.log('I am moving from Child class');
        super.move(); // this is how we call a super method
    }
}

const marrana = new Animal('amparo');
marrana.move();
console.log(marrana.greeting());

const perruncho = new Dog('jamecho', 'ema');
perruncho.move();
console.log(perruncho.greeting());
perruncho.barking(5);
console.log(perruncho.owner);
// here it is possible to modify the property name if the property name is public, not if it is protected or private
// perruncho.name = 'kony'; 

perruncho.barking(3);

perruncho.move();


console.log(Math.PI);
console.log(Math.max(3,4,8,12,44));


// Example 1
class myMath1 {
    PI = 3.14;
}
// define the object
const math = new myMath1();
console.log(math.PI);


// Example 2
// if it is static, there is no need to create a class
class myMath2 {
    static PI = 3.14;
}
console.log(myMath2.PI);
myMath2.PI = 6; // if the property is not readonly, it can be re-assigned


// Example 3
class myMath3 {
    static readonly PI = 4.14;
}
console.log(myMath3.PI);
// here cannot be reassigned
// myMath3.PI = 6;

// with methods:
class myMath4 {

    static max(...numbers: number[]){
        console.log(numbers);
        // return numbers.reduce((max, current) => ( max >= current ? max : current), 0); // this can or not being initialized
        return numbers.reduce((max, current) => ( max >= current ? max : current));
    }
}

const arrayMyMath4: number[] = [4,7,12,55,99]; // 99
console.log(myMath4.max(...arrayMyMath4)); // spread op is required here because we are sending parameter by parameter
console.log(myMath4.max(3,5,11,23)); // 23
console.log(myMath4.max(-3,-5,-11,-23)); // -3




// public:
// everyone can modify and access using public

// protected:
// is private but with inheritance (can be used only internally, but can be inherited)

// Abstract: 


// static: 
// the property or method, is available outside of the class, without creating an instance
// only calling the class






