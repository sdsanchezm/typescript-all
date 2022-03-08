# TypeScript Learning process personal documentation

## install Typescript compiler

- Esto lo instala de forma global
```
npm install -g typescript
```

- Verificar:
```
tsc -v
```

### Compilar:
```
tsc your_file.ts
```

### Compile automatically
```
tsc --watch your_file.ts

```

### Result of compilation:

- generates a js file and can be executed in nodejs
```
node your_file.js
```
- Typescript nunca se ejecuta de manera directa, tiene que ser siempre por medio de nodejs


### archivo tsconfig.json
- allows to specify the root of the project
- allows to configure optios of the compiler
- To create it:
```
tsc --init
```
- the previous command will automatically create a `tsconfig.json` file 
- it's a object literal that will allow to modify it
- target, allows to select the ecma script version
- module, permite configurar el parametro para la generacion de modulos en ts
- strict, enabled or disable strict verification 
- removeComments, eliminates comments in the verification step
- include and exclude, basically consider or not files at the compilation time
- extends, allows to inherit config files 
- compileOnSave, compilacion de forma automatica cuando se guarden cambios


### modes of compilation:

- the following command, looks for the config file:
```
tsc
```

- the following command, looks for the config file in a specific folder:
```
tsc --project platzi
```

- the following command, omits the config file, and compiles directly:
```
tsc file.ts
```

### Establish a dist folder
- modifying OutDir allows us to establish the output folder


### Variables

- El tipo any deberia dejarse como ultimo recurso 

```
// Number Explicit
let phone: number;
// phone = '+367128815';  Error de tipo
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
```

### Variable type any
- should be used only if is extrictly necessary
- It is automatically assumed if no type is selected

```
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
```
- by the other hand `void` is the absence of type 
- commonly used in functions that are returning value
- Not used in variable declaration
- Tipo `Void`: Son funciones que no necesitan de un retorno, por lo que al asignar el tipo void se sobre entiende que estas funciones retornan un undefind o un valor no definido, mas si permiten el uso de este return con este valor, que en el futuro puede ser usado para la terminacion de una funcion de este tipo.
- Tipo `Never`: Son funciones que nunca retornaran un valor, dentro de TS si intentas retornar un valor en una funcion `Never` te marcara `error`
- Normally `never` are used to ensure a function does not return a value, if a value is returned, then TS will trigger an error 
- Variables type `never` do not allow value assignation; (the opposite to `void` that allows the `undefind` and `null` type being assigned)

```
// type void in functions
// Explicit type
function showInfo(user: any): any {
    console.log(`User Info ${user.id} ${user.username} ${user.firstname}`);
    //   return 'something';
  }
  
showInfo({id: 1, username: 'birk urpe', firstname: 'Klaaine Kirke'});
  
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
```

### Type null and undefined

- The most common habit to avoid mistakes in this, is to prevent from using the `null` and `undefined` assignation
- Also, when compiling, the tag --strictNullChecks can be used, like this:
```
tsc --strictNullChecks
```
- There is also the option to modify the `tsconfig.json` to enabled the check automatically (also `strict` is required to be set to true)

- Code for this section
```
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

/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */
let albumName: string;
// albumName = null;
// albumName = undefined;
```

### Type Object 
- Everything that is not number, string, boolean, null, undefined etc, is considered object
- 
```
// Type Object and object in Typescript 
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
```

- Object vs object (class JS vs type TS) 
```
const myObj = { // esto es una instancia del objeto object // this is an instance of Object in JS
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; // returns true, meaning, it is an instances of the Object class in JS
console.log('isInstance : ', isInstance); // clase Object JavaScript
console.log('myObj.username : ', myObj.username); // cannot access username
```



### Arrays in TypeScript
- 2 ways to declare arrays

```
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
```


#### Methods of Arrays in Typescript 

- shift(), Removes the first element from an array and returns that element
- push(), Adds one or more elements to the end of an array and returns the new length of the array
- pop(), Removes the last element from an array and returns that element
- splice(), Adds and or removes elements from an array
- slice(), Extracts a section of an array and returns a new array
- some(), Returns true if at least one element in this array satisfies the provided testing function
- filter(), Creates a new array with all of the elements of this array for which the provided filtering function returns true
- forEach(), Calls a function for each element in the array
- every(), Returns true if every element in this array satisfies the provided testing function
- concat(), Returns a new array comprised of this array joined with other array and or value
- sort(), Sorts the elements of an array
- lastIndexOf(), Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found
- indexOf(), Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found
- reduce(), Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value
- join(), Joins all elements of an array into a string
- map(), Creates a new array with the results of calling a provided function on every element in this array
- reduceRight(), Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value
- toString(), Turns a number into a text
- reverse(), Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first

### Tuples in Typescript
- Una tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.
- Tuples: Allows to write an array with a fixed number of elements

```
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
```

### Enums in TypeScript
- Allows to define a set of contstants with a name 

```
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
```


### Unions of Types, Alias, Types in TypeScript 
- Una función en Typescript puede recibir como parámetro diferentes tipos predefinidos usando Union Types
- Usando Alias podemos reducir la cantidad de código en los tipos predefinidos
- En ese caso en vez de definir dos tipos con la misma condición, sería interesante englobarlas en una sola
- En TypeScript se puede definir una variable con multiple tipos de datos: Union Type
- Se usa el simbolo de pipe ('|') entre los tipos 

```
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
```

### Type Assertions in Typescript

- Documentation at (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#new-tsx-file-extension-and-as-operator)[https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#new-tsx-file-extension-and-as-operator]
- TS do not make any type of verification 
- If we declare a variable type any, and then assign data type string, then we do not have a way to find for example the length, so we have to convert the type, like this:
```
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
```










