// singleton example in typescript
export class MyServiceExample {
    static instance: MyServiceExample | null = null;

    private constructor(private name: string) {}

    getServiceName() {
        return this.name;
    }

    static create(name: string) {
        if (MyServiceExample.instance === null) {
            console.log("should enter 1 time to validate");
            MyServiceExample.instance = new MyServiceExample(name);
        }
        return MyServiceExample.instance;
    }
}

const myServiceExample1 = MyServiceExample.create("service number 1");
console.log(myServiceExample1.getServiceName()); // service number 1

const myServiceExample2 = MyServiceExample.create("service number 2");
console.log(myServiceExample2.getServiceName()); // service number 1

const myServiceExample3 = MyServiceExample.create("service number 3");
console.log(myServiceExample3.getServiceName()); // service number 1

console.log(myServiceExample1 === myServiceExample2); // true
