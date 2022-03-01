
// Master file of the typeScript Learning Process
// Official Documentation Page: https://www.typescriptlang.org/docs/

// Variable Definitions: 

let id: number = 21 // numbers, integers and also floats
let client: string = 'clients name' // string
let isCompleted: boolean = false // boolean
let y: any = 'Hallo' // any type 
let clientsIds: number[] = [21, 21, 23, 24, 25] // this is an array
let array1: any[] = [21, false, 'Hallo'] // an array type any
let customer: [number, string, boolean] = [3432, 'Kraus', false] // This is a Tuple in Tyscript, 3 different tyoe of values in only 1 array
// ------
// to cast a number:
let myNumberString: string = "25";
let myNumber: number = +myNumberString;
// or
let myNumber2: number = Number(myNumberString);

// -------
let employees: [number, string][] // declaration of an array and tuple 
employees = [
  [41, 'Morgan'],
  [42, 'Peter'],
  [43, 'Jeezeera'],
]

let uid: string | number // this is a union in typescript ------------------?
uid = '22' // it could be a string or a number 

enum enumeration1 { // this is an enumeration, the keyword enum is used usage: ------------?
  Up = 1,
  Down,
  Left,
  Right,
}

enum enumeration2 { // an enumeration can also be declared, like this. Its usage is like: 
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// ----------------------
type Customer = { // This is an object the keyword used is 'type' - uses the equal sign 
  id: number
  name: string
}

const customer1: Customer = { // in this case, creating the object customer1, of type Customer
  id: 1,
  name: 'John',
}

// ----------------

let pid: any = 1 // Type Assertion, we want to treat an entity as different type, for example, pid is any type
// let personId = <number>pid // this is one option, here we treat personId as number
let personId = pid as number // this is another option, here we treat personId as number (same as the above option)

// ---- functions in TypeScript
function sumNum(x: number, y: number): number { // this is how a function is normally defined - it will return a number (the last type)
  return x + y
}

function log(message1: string | number): void { // this is another function but it returns a void type, or not nessesarily a type - returning void
  console.log(message1)
}

// -------- Interfaces in TypeScript 
interface PersonInterface { // Interfaces - similar to objects but no equal sign and the keyword interface at the beggining
  // readonly pid: number // readonly, means that can not be assigned, 
  pid: number // this is not restricted with the readonly tag (compared to the above one)
  name: string
  age?: number // the question mark, means it is optional, not required when declaring an instance of this interface 
}

const person1: PersonInterface = { // this is similar to objects but -----?
  pid: 1,
  name: 'Jamecho',
}

// Cannot use interfaces in unions, for example: 
type kk1 = number | string // is okay
interface  kk1 = number | string // is NOT okay, interfaces does not allow unions
// cannot use interfaces with primitives or with unions 

// ---------- function Interfaces in TypeScript
interface xFunctionInterface1 { // is a definition of a function, is kinda of template of a function
  (x: number, y: number): number
}

// example of not using function interfaces
// const testAddition: xFunctionInterface1 = (x: number, y: string): number => x + y // this will trigger error because the fucntion interfaces was defined differently

const addition: xFunctionInterface1 = (x: number, y: number): number => x + y
const substraction: xFunctionInterface1 = (x: number, y: number): number => x - y

interface clientInterface {
  id: number
  name: string
  userregister(): string
}


// -------- Classes in Typescript implements -- this is how a class interface works 
class userClass implements clientInterface {
  // private id: number // the private keyword is to make it accessible only within the class 
  // protected id: number // the protected keyword is to make it accessible only within the class OR when the class is extended 
  // public id: number // the public keyword is to make it public, is the same that does not write anything
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  userregister() {
    return `The user ${this.name} was registered successfully.`
  }
}

// -- instantiating an object in Typescript (using the above class) 
const jamecho1 = new userClass(21, 'Jamecho  Shanchez')
const nairo1 = new userClass(22, 'Nairo Sanchez')


// -------- Subclasses in typeScript - extending a class - extends a class in typescript 
class Associate extends userClass {
  job: string

  constructor(id: number, name: string, job: string) {
    super(id, name) // the super functions brings all from the parent class, in this case us userClass, with 2 main properties 
    this.job = job // this one can be reated in the regular way
  }
}

const collaborator = new Associate(21, 'Kork', 'Accountant') // -- instatiating a class here 

// ---------- Generics in typeScript - it uses reusable components 
function getArray1<T>(items: T[]): T[] { // declares a generic type, T. 
  return new Array().concat(items)
}

// this can also be expressed like this BUT this expression, allows to have different types in the same array, and we dont want that in many cases.
function getArray2 (items: any[]): any[] {
  return new Array().concat(items)
}

// This is how to use generics in Typescript - first case:
let numbersArray1 = getArray1<number>([1, 2, 3, 4]) // cannot add a string or similar 
let stringArray1 = getArray1<string>(['Merk', 'Korg', 'Minsk'])
numbersArray1.push('randomtext') // this will trigger error
// second case
let numbersArray2 = getArray2([2,5,8,10])
numbersArray2.push('randomtext') // this will NOT trigger error because allows pushing a different type, which is what we dont want in many cases

// stringArray1.push(1) // This will thow an error, because we are using a number insted of a text 


// -- Classes in Typescript 

class User {
  // Data Modifiers: public, private, protected
  // private id: number // the private keyword is to make it accessible only within the class 
  // protected id: number // the protected keyword is to make it accessible only within the class OR when the class is extended 
  // public id: number // the public keyword is to make it public, is the same that does not write anything
  id: number
  username: string
  usernumber: number

  constructor(id: number, username: string, usernumber: number){
    this.id = id
    this.username = username
    this.usernumber = this.usernumber
    //console.log(`User ${username} created`)
  }
}

const perro = new User(2, 'nairo', 2323);
const gato = new User(2, 'tiche', 4343);
