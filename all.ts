
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
    username: 'Kling',
    firstname: 'Rod',
    isPro: true
};
console.log('user', user);
// console.log('user.username', user.username); // cant access user.username 


// Object: instanciate a class Object of JavaScript
// object: non primitive type

// ---- Object vs object (class JS vs type TS) 
const myObj = { // esto es una instancia del objeto object // this is an instance of Object in JS
    id: 1,
    username: 'Urklu',
    firstname: 'Marker',
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
console.log('main user : ', users[0]); //  users[indice]: result
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

// -- tuples in Typescript

// Tuples: Allows to write an array with a fixed number of elements
export {}; // this is an export, that allows to use the same name of a variable previously declared

// [1, 'user']
let user: [number, string]; // 
user = [1, 'kokoperkle'];

console.log('user : ', user);
console.log('username : ', user[1]);
console.log('username.length : ', user[1].length);
console.log('id : ', user[0]);

// multiple value Tuples
// id, username, isActive
let userInfo: [number, string, boolean];
userInfo = [2, 'merkkilo', true];
console.log('userInfo : ', userInfo);

// Array of tuples
let array: [number, string][] = [];
array.push([1, 'krauskorn']); //0
array.push([2, 'mershPoulous']); //1
array.push([3, 'KrausKorg']);   // 2
console.log('array : ', array);

// array functions
// Updating tuples: 
array[2][1] = array[2][1].concat('001');  // how to concat here, because is a string
console.log('array : ', array);


// -- Enum in Typescripts 
// Enum: it allows to define a set of contstants with a name
// it could be used for, Days of the week, months, countries, colors, 

// images orientation: 
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0, // podemos darle valor de manera explicita
    Portrait,   // 1
    Square,     // 2
    Panorama    // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log('landscape : ', landscape); // 0
console.log('Landscape : ', PhotoOrientation[0]); // Landscape

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait,   // 11
    Square,     // 12
    Panorama    // 13
}
console.log('porttrait : ', PictureOrientation.Portrait); // 11

enum Country {
    Chupamestepenco = 'chu',
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
}
const country: Country = Country.Chupamestepenco;
console.log('country : ', country); // chu


// -- unions 

10, '10' there are 2 different types of data 
let idUser: number | string; // this is how we declare variables that can use 2 different types of data, with a pipe
idUser = 10; // no error
idUser = '10'; // no error

// find a username using an id
function getUsernameById(id: number | string) {
    // business logic, find the user
    return 'krausvanderbilder';
}

// uses: 
getUsernameById(20);
getUsernameById('20');

// type - alias 
type IdUser = number | string; // this is like a new type of variable, or alias, the keyword is type
type Username = string; 
let idUser: IdUser;
idUser = 10;
idUser = '10';

// find a username using an id
function getUsernameById(id: IdUser): Username {
    // business logic, find the user
    return 'krausvanderbilder';
}

getUsernameById(20);
getUsernameById('20');

// Literals 
type SquareSize = '200x200' | '300x300' | '900x900';
// let smallPicture: SquareSize = '400x400'; // If we try to assign this, it will trigger error, because is not an option
let smallPicture: SquareSize = '200x200'; // this is ok
let mediumPicture: SquareSize = '300x300'; // this is ok


// -- Type Assertions 

//<type> // Angle Bracket syntax
let username: any;
username = 'robergalarga';

// we convert username to string, to get the length of it:
let message: string =
  (<string>username).length > 5 ? `hi ${username}` : `username is too short`;
console.log('Message: ', message);

let usernameWithId: any = 'krauloz 2132';

// How to obtain the username?
usernameWithId = (<string>usernameWithId).substring(0, 9);
console.log('username only', usernameWithId);

// Sintaxis 'as' 
usernameWithId =
  (username as string).length > 5 ? `hi ${username}` : `username is too short`;
console.log('username: ', username);

let helloUser: any;
helloUser = 'hi programmer';
username = (helloUser as string).substring(6);
console.log('username', username);


