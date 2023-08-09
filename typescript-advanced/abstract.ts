import { Auto, Car } from "./classAuto";

// Abstract restrict creation of parent classes, like in this case
// const autoExample = new Auto("AutoTest"); // error, class can't be created, it's abstract
// autoExample.getBrand();

// in this case the child class can be created and the methods are available to be used
const Chevy = new Car("cheis", "nico");
Chevy.getBrand();
Chevy.carMove();
