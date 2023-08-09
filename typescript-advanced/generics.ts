import { Car } from "./classAuto";

function getValue<T>(value: T) {
    const array: T[] = [value];
    return value;
}

getValue<number>(12).toFixed();
getValue<string>("12").toLowerCase();
getValue<number[]>([11, 1, 1]).forEach;
const superCar = new Car("buttagi", "amparo sanc");
getValue<Car>(superCar).getBrand;
