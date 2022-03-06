
console.log("hallo welt");

// Number Explicit
let phone: number;
// phone = '+367128815';  Type Error
phone = 924234669;

// Number inferred
let phoneMovil = 637128815;
// let phoneMovil = true;  Error is defined before

let hex: number = 0x21ac;
let binary: number = 0b0110;
let octal: number = 0o734;

// Type: Boolean
let isEnabled: boolean;
isEnabled = true;
// isPro = 1;  Error

// String
let username: string = 'bestuser1';
username = 'anotherusername';
// username = true;  Error

// Template String with use of back-tick ``
let userInfo: string;
userInfo = `
    = User information: 
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phone: ${phone}
    isActive: ${isPro}
`;

console.log('user information', userInfo);

// type Any  For dynamic variables, it should be used a an ultimate resource (in case no more option)
// Explicit type: 
let idUser: any;
idUser = 1; // this is Number
idUser = '1'; // this is String
console.log('iduser ', idUser);
console.log(typeof idUser);

// Inferred type
let otherId; // here ts will assume any 
otherId = '1';
otherId = 1;
// otherId = true;
console.log('otherId ', otherId);
console.log(typeof otherId);

let kk1: any = 'Hello typescript';
// suprise.sayHello(); // Error
const response = kk1.substring(11);
console.log(`response ${response}`);




// type void in functions
// Explicit type
function showInfo(user: any): any {
    console.log(`User Info ${user.id} ${user.username} ${user.firstname}`);
    //   return 'something';
  }
  
showInfo({id: 1, username: 'Kork Merk', firstname: 'Blikn Urpe'});
  
// Inferred type
function showFormattedInfo(user: any) {
    console.log(`User Info,
          id: ${user.id}
          username: ${user.username}
          firstname: ${user.firstname}`);
}

showFormattedInfo({id: 1, username: 'Muck Kraus', firstname: 'Belck merk'});

// Type void as variable 
let unusable: void;
// unusable = null; // change "strict": false in tsconfig.json in order to use this mode
unusable = undefined;

// Type never // typically used to return error messages, not returning a value or similar
function handleError(idx: number, message1: string): never {
// Process your code
// Generate a message
throw new Error(`${message1}. id: ${idx}`);
}

try { // se usa try para llamar esta funcion especifica (incluye in throw new Error)
console.log('test');
handleError(404, 'Not found');
} catch (error) {}

function sumNumbers(limit: number): never {
let sum = 0;
while (true) {
    sum++;
}
// return sum;
}

sumNumbers(10); // this is infinite loop, it does not compile, that is why the type `never` is used

// --

//  Variable Type null and undefined
// Explicit
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // this is an eror because we are assigned something different that null 

// Inferred
let otherVariable = null;   //  This is inferred as type any 
otherVariable = 'test';

console.log('nullVariable : ', nullVariable);
console.log('otherVariable : ', otherVariable);

//  Undefined variable type 
let undefinedVariable: undefined = undefined; // this is fine, the value undefined is being assigned to a variable type undefined
// undefinedVariable = 'test'; // This triggers Error 

let otherUndefined = undefined;     //  any
otherUndefined = 1;

console.log('undefinedVariable : ', undefinedVariable);
console.log('otherUndefined : ', otherUndefined);

// subtypes null and undefined 


 // tsc --watch src/type-null-undefined.ts --strictNullChecks
 // set tsconfig.json "strictNullChecks": true
 
let albumName: string;
// albumName = null;
// albumName = undefined;

// -- 

// Type Object 
// explicit 
let user: object;
user = {}; // Object
user = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true
};
console.log('user', user);
// console.log('user.username', user.username); // cant access user.username 


// Object: instanciate a class Object of JavaScript
// object: non primitive type

// ---- Object vs object (class JS vs type TS) 
const myObj = { // esto es una instancia del objeto object // this is an instance of Object in JS
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; // returns true, meaning, it is an instances of the Object class in JS
console.log('isInstance : ', isInstance); // clase Object JavaScript
console.log('myObj.username : ', myObj.username); // cannot access username

// -- Arrays in Typescript
// Explicit
let users: string[];
users = ['apple', 'pinneaple', 'grapefruit'];
// users = [1, true, 'test']; // this will throw Error

// Inferred
let otherUsers = ['coconut', 'tomato', 'onions'];
// otherUsers = [1, true, 'test']; // this will throw Error

// Array<tipoDato> this is another way to declare arrays
let pictureTitles: Array<string>;
pictureTitles = ['landscape', 'good grape', 'good fruit'];

// accessing values in arrays
console.log('main user : ', users[0]); //  users[indice]: luixaviles
console.log('job title : ', pictureTitles[0]);

// Properties of arrays
console.log('users.length : ', users.length); // Size of the array

// fucntions and methods in arrays 
users.push('newData1');  // add a new value at the end of the array
users.sort();   //  alphabetically sort the array
console.log('users', users);

// array with 3 different types: 
let myArray: (string | number | boolean)[];
myArray = [false, 1, '2'];

// array type any
let myArray: any[];
myArray = [{}, true, 'two', 0b11];

