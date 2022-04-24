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

//  Variable Type null and undefined ------------------------------------------------------------------------------------
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

// -- Arrays in Typescript ------------------------------------------------------------------------------------
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

// -- tuples in Typescript ------------------------------------------------------------------------------------

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


// -- Enum in Typescripts ------------------------------------------------------------------------------------
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


// -- unions ------------------------------------------------------------------------------------

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


// -- Type Assertions ------------------------------------------------------------------------------------

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

// -- Functions in Typescript   ------------------------------------------------------------------------------------


// Some key points: 

// Los parámetros en las funciones son tipados
// Se pueden definir parámetros opcionales
// El tipo de retorno puede ser un tipo básico, enum, alias, tipo literal o una combinación de ellos


// Crear una Fotografia: JS
function createPicture(title, date, size) {
    // title
}

type SquareSize = '100x100' | '500x500' | '1000x1000'
// Usamos TS, definimos tipos para paramentros
function createPicture(title:string, date: string, size: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia', '2020-03-20'); // --> Error

// Parametros opcionales
function createPicture(title?:string, date?: string, size?: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size };
};

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);


// Se comentan solo los valores opcionales, pero nunca se comentaron los valores por defecto, les comparto un ejemplo
// El ultimo parámetro size es opcional y siempre se tomara por defecto las medidas de 100x100

/**
 * Listado de propiedades de una foto
 *
 * @param   {string}      title Nombre de la foto.
 * @param   {string}      date Fecha en la que fue tomada.
 * @param   {SquareSize}  size (Optional) Tamaño de la foto.
 *
 * @return  {object}
 */
 const dataPicture = (title: string, date: string, size: SquareSize = "100x100"): object => ({
    title,
    date,
    size,
});


// Como dato extra, cuando una función recibe otra función, el tipo de esa función se define de esta forma.
// El valor de retorno se define con => 

function apply(items: number[], fn:(item: number) => number): number{
    ///....
}

// -- Interfaces ------------------------------------------------------------------------------------


// una interfaz definia unicamente los METODOS de un objeto y no las propiedades. 
// Tanto de las propiedades como los metodos se encargan las clases.
// Aqui es donde entra Typescript, en TS podemos tambien definir propiedades, no unicamente metodos.
// Y si es util, creo que esta definicion de interfaz es un poco mas clara: Una interfaz (En TypeScript) es un tipo (string, boolean, number, etc) mas “complejo”, en el cual defines (como en un contrato) las propiedades y metodos que se deben cumplir de cualquier objeto que lo instancie.
// La diferencia entre una interfaz y una clase es que en la interfaz solo hacemos mencion de que esperamos de un objeto, en una clase mencionamos las propiedades (igual que una interfaz) pero definimos los metodos (osea, especificamos que hara ese metodo, en la interfaz solo mencionamos el nombre de la funcion)

// Funcion para mostrar una Fotografia
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                 date: ${picture.date}, 
                 orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'// Error
});



// -- Interfaces: propiedades opcionales ------------------------------------------------------------------------------------

// Funcion para mostrar una Fotografia
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                 date: ${picture.date}, 
                 orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'// Error
});

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '2020-03'};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic'});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic', date: '2021-05'});
console.log('picture', picture);

// Intefaz: Usuario
interface User {
    readonly id: number; // solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'luixaviles', isPro: true};
console.log('user', user);
user.username = 'paparazzi';
// user.id = 20; //Error!
console.log('user', user);



// Propiedades opcionales : No todas las propiedades de una interfaz podrian ser requeridas. Usamos el simbolo ‘?’ luego del nombre de la propiedad.

interface PictureConfig {
	title: string;
	date?: string;
	orientation: PhotoOrientation
}

// Propiedades de solo lectura: Algunas propiedades de la interfaz podrian no ser modificables una vez creado el objeto. Esto es posible usando readonly antes del nombre de la propiedad.

interface User {
	readonly id: number;
	username: string;
	readonly isPro:boolean;
}


interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}
function generatePicture(config: PictureConfig) {
    const pic = { title: 'Default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture : ', picture);
picture = generatePicture({title: 'Travel Pic'});
console.log('picture : ', picture);
picture = generatePicture({title: 'Travel Pic', date: '2012-05'});
console.log('picture : ', picture);

// Interfaz: usuario
interface User {
    readonly id: number; // solo lectura
    username: string;
    isPro: boolean
}
let user: User;
user = { id: 10, username: 'luixaviles', isPro: true }
console.log('user : ', user);
user.username = 'paparazzi';
// user.id = 20; // --> Error
console.log('user : ', user);



// -- Inheritance - Extensión de interfaces -------------------------------------------------------------------

export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // copia de los atributos de Entity
    description: string;
}

interface Picture extends Entity {
    orientation: PhotoOrientation
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};

const picture: Picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);



// Extendiendo Interfaces. Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes.
// Utilizamos la palabra reservada extends para utilizar herencia.

interface Person {
    name:string;
    lastname:string;
}
interface Student extends Person {
    person:Person
}



const food = { beef: 'BEEF', bacon: 'BACON' }

// "Spread Operator"
{ ...food }

// "Object.assign"
Object.assign({}, food)

// "JSON"
JSON.parse(JSON.stringify(food))

// RESULT:
// { beef: 'BEEF', bacon: 'BACON' }




// -- Classes in Typescript -------------------------------------------------------------------


// Las clases y a la POO, se puede conectar las diferentes entidades y se puede relacionar
// Una clase es la asbtracción de un conjunto de objetos
// Para definir una entidad usuario, se hace uso de una clase: Se debe definir una clase que
// dentro tenga una función que permita crear objetos a partir de esta Clase y poder interactuar con ellos.


export{}

enum PhotoOrientation {

  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {

  // Properties 
  id: number;
  title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation){

    this.id = id;
    this.title = title;
    this.orientation = orientation;

  }

  
  // The behavoir of the class is defined by this method

  toString(){
    return `[id ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}]`;
  }

}

class Album{

  id: number;
  title: string;
  pictures: Picture[];

  // Create the constructor: 
  constructor(id: number, title: string){

    this.id = id;
    this.title = title;
    this.pictures = [];
  }
    addPicture(picture: Picture){
      this.pictures.push(picture);

    }

  }

  // Create a new object here

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Course session', PhotoOrientation.Square);
album.addPicture(picture);

  console.log(album);


// -- Public and Private Classes in TypeScript -----------------------------------------
// compiler Options in tsconfig.json, should be "target": "es6"

export {};

// TypeScript 3.8

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Properties
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.#id}, 
                 title: ${this.#title}, 
                 orientation: ${this.#orientation}]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);

// Accediendo a los miembros publicos
// picture.id = 100; // private
// picture.title = 'Another title'; // private
// album.title = 'Personal Activities'; //private
console.log('album', album);


// Clases - miembros públicos: define un modificador de acceso publico por defecto para los miembros de la clase. También es posible marcar un miembro como publico usando la palabra reservada public
// Clases - miembros privados: define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada private

class Person{
	private id:number;
	private name: string;
	public constructor(){}
	public getName(){
		return this.name
	}
}


// Miembros privados ECMAScript: soporta (a partir de la versión 3.8) la nueva sintaxis JavaScript para miembros privados: #atributo. Esta caracteristica puede ofrecer mejores garantias de aislamiento en miembros privados
// Para que VSCode no nos tire errores por usar esta sintaxis, instalar JavaScript and TypeScript Nightly
// Usar la sintaxis # para miembros privados es mejor porque nos garantiza encapsular nuestros miembros privados. a diferencia de usar private

class Person{
	#id:number;
	#name: string;
	public constructor(){}
	public getName(){
		return this.#name
	}
}


// typescript tiene un metodo llamado set que permite crear un atributo virtual con el cual podemos llenar nuestra propiedad privada y seria asi

Class Album{
	private _id: number

	setid(id: number){
		this._id = id
	}
}

// de esta forma usaramos el set de la siguiente forma

let album newAlbum();
album.id = 3;

// si vemos que el metodo privado se llama _id y es privado pero usando el metodo id declarado con la palabra set hemos creado un atributo virtual que sirve para acceder a la propiedad privada, con esto podemos validar desde el metodo set y por ejemplo no permitir modificar si el metodo ya tiene un valor algo mas o menos asi

setid(id:number){
	if (this._id === undefined){
		this._id = id
	}
}
// y externamente todo funcionará como si se tratase de un atributo publico






// -- Métodos Get y Set -------------------------------------------------------------------




export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// get y set

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this._id = id;
        this.title = title;
        this.orientation = orientation;
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this.orientation}]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(t: string) {
        this._title = t;
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);

// Accediendo a los miembros publicos
console.log('picture.id', picture.id); // get id()
picture.id = 100; // private, set id(100);
picture.title = 'Another title'; // private
album.title = 'Personal Activities'; //private
console.log('album', album);






// TypeScript soporta getters/setters como una forma de interceptar accesos a un miembro de un objeto. Esto le da una forma de tener un control más fino sobre cómo se accede a un miembro en cada objeto.
// Convirtamos una clase simple para usar get y set. Primero, empecemos con un ejemplo sin getters y setters.


class Employee {
    fullName: string;
  }
  
  let employee = new Employee();
  employee.fullName = "Bob Smith";
  
  if (employee.fullName) {
    console.log(employee.fullName);
  }


// Aunque permitir que la gente establezca directamente el nombre completo al azar es bastante útil, también podemos querer imponer algunas restricciones cuando se establece el nombre completo.
// En esta versión, añadimos un configurador que comprueba la longitud del nuevo Nombre para asegurarse de que es compatible con la longitud máxima de nuestro campo de base de datos de respaldo. Si no lo es, arrojamos un error notificando al código del cliente que algo salió mal.
// Para preservar la funcionalidad existente, también añadimos un simple programa que recupera el nombre completo sin modificar.


const fullNameMaxLength = 10;

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}

// Para probarnos a nosotros mismos que nuestro accesorio está comprobando ahora la longitud de los valores, podemos intentar asignar un nombre de más de 10 caracteres y verificar que obtenemos un error.
// Un par de cosas a tener en cuenta sobre los accesorios:
// Primero, los accessores requieren que el compilador dé como resultado ECMAScript 5 o superior. La bajada de nivel a ECMAScript 3 no está soportada. Segundo, los accesorios con un get y sin set se infieren automáticamente para ser de solo lectura. Esto es útil cuando se genera un archivo.d.ts a partir de su código, porque los usuarios de su propiedad pueden ver que no pueden cambiarlo.



// _(underscore) Es una simple convención que indica una variable privada.

private _id: number;
private _title: string;
private _orientation: PhotoOrientation;


// ¿Por qué se coloca un guion bajo a las variables privadas?
//Eso es una forma de decirle a los programadores que una variable no se debe modificar. Es solo una convención, por lo que incluso podemos cambiar esa variable si así lo deseamos, no hay problema por parte del lenguaje, pero es una convención que el programador le hace a otros programadores que pueda que trabajen en el proyecto a futuro




export{}

enum PhotoOrientation {

  Landscape,
  Portrait,
  Square,
  Panorama
}

//Los moficadores de acceso get y set son metodos que nos permiten controlar
  //El acceso a cada uno de los miembros

class Picture {
  #id:number;
  #title:string;
  #orientation:PhotoOrientation;

 
  constructor(id:number,title:string,orientation:PhotoOrientation){

    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;

  }
  //El nombre de una funcion accesora no debe coincidir con el nombre de un miembro
    //Podremos arreglar esto cambiando el nombre del miembro o el de la funcion
  get idH(){
    return this.#id;
  }
  set idH(id){

    this.#id = id;
  }

  get titleT(){

    return this.#title

  }
  set titleT(title:string){

    this.#title = title;

  }

  get orientationO(){

    return this.#orientation;
  }

  set orientationO(o:PhotoOrientation){

    this.#orientation = o;
  }

  public toString(){
    return `[id ${this.#id},
            title: ${this.#title},
            orientation: ${this.#orientation}]`;
  }

}

class Album{

  #id:number;
  #title:string;
  #pictures: Picture[];

  public constructor(id:number, title:string){

    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }
    public addPicture(picture:Picture){
      this.#pictures.push(picture);

    }

  }

  const album:Album = new Album(1, 'personal pictures');
  const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation)
  album.addPicture(picture);

  console.log(album);

//Cada vez que efectuamos un cambio accesando a los atributos de mi objeto heredado
  //Estamos aplicando por debajo los metodos get cuando solo solicitamos el valor
    //Y set cuando cambiamos el valor de el atributo
  console.log(picture.id)//get id()
  picture.id = 100;  //private, set id(100)
  picture.title = 'Otro titulo'; 
  album.title = 'Personal Activities';
  console.log(album);





  // -- Class Inheritance and static properties - Herencia de clases y propiedades estáticas ---------------------------------------------------------


export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
// SUPERclase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}
  
  
// get y set ------------

class Picture extends Item{
    public static photoOrientation = PhotoOrientation;
    // Properties
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) { 
        super(id, title);
        this.orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }

    // Method
    public toString() {
        return `[id: ${this.id}, 
                title: ${this.title}, 
                orientation: ${this.orientation}]`;
    }
}
  
  class Album extends Item{
      private pictures: Picture[];
  
      public constructor(id: number, title: string) {
          super(id, title);// constructor de SUPER clase
          this.pictures = [];
      }
      public addPicture(picture: Picture) {
          this.pictures.push(picture);
      }
  }
  
  const album: Album = new Album(1, 'Personal Pictures');
  const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
  album.addPicture(picture);
  console.log('album', album);
  
  // accessing the public members
  console.log('picture.id', picture.id); // get id()
  // picture.id = 100; // private, set id(100);
  picture.title = 'Another title'; // private
  album.title = 'Personal Activities'; //private
  console.log('album', album);
  
  // const item = new Item(1, 'Test title');
  // console.log('item', item);
  
  // Probar el miembro estatico 
  console.log('PhotoOrientation', Picture.photoOrientation.Landscape);



// asbtract: cuando requeires que una clase no sea instanciada
// protected: atributo de los miembros para que puedan ser accedidos desde su propia clase y también que puedan ser solo accedidos a quienes heredan esa clase con implements(herencia)
// implements: herencia claseA extends claseB { … }
// static: para poder acceder a métodos/propiedades de una clase sin la necesidad de la instancia(new ClaseA()) sino const a = ClaseA.propiedad
// Abstract = cuando requieres que una clase no sea instanciada
// Protected = Entre público y privado, para que los elementos puedan ser accedidos por la clase y subclases
// Extends = herencia de SUPER clase a subclases, para invocar al constructor de la SUPERclase en las subclases usar super(propiedades)
// Static = Puede acceder a métodos y propiedades de una clase sin instanciarla
// Readonly = Indica propiedades que solo se pueden leer

// Herencia de clases y miembros protegidos
// Typescript soporta este patrón común en el mundo de la POO
// Implementa la habilidad de extender codigo de clases existentes a través de la herencia.
// Utilizamos la palabra extends para heredar
// Se heredan solo los atributos public o protected
// tenemos acceso al constructor de la clase padre super()

class Person {
	protected id:number;
	protected name:string;
	constructor(id:number, name:string){
	
	}
}
class Student extends Person {
	private active:boolean
	constructor(id:number, name:string, active:boolean){
		super(id,name)
		this.active = active
	}
}

// Clases abstractas: Las clases abstractas son la base de donde otras clases podrian derivarse. A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.
// La palabra reservada es abstract

abstract class myClass{}

// Recordar que las clases abstractas no se pueden instanciar
// Propiedades estaticas y de solo lectura
// Las clases por lo general definen atributos y métodos aplicables a las instancias de las mismas. A través de la palabra reservada **static ** se puede definir un miembro visible a nivel de clase
// Al igual que las interfaces, podemos usar la palabra reservada readonly para marcar el miembro de una clase como solo lectura

class Person {
	static personQuantity: number = 0
	protected readonly id: number
}

// a las propiedades static se las accede a través de la clase

console.log(Person.personQuantity)

//a las propiedades readonly no se las puede modificar



// Super Clases:
// Al igual que las interfaces, las clases también pueden heredar atributos y propiedades.
// |-> Implementa la habilidad de extender código de clases existentes a través de la herencia
// Modificador de acceso protected que permite un acceso ni público ni privado. Dan acceso a los miembros cuando las subclases requieran usarlos.
// super(): Sirve para invocar al constructor de una SUPERCLASE. Un objeto que instancie la (super)clase, va a tener inicializado las variables que dentro de la superclase fueron declaradas
// Clases Abstractas:
// Son la base de donde otras clases pueden derivarse. Implementa funciones para sus instancias . abstract es la palabra reservada
// Se usan cuando una super clase llega a ser demasiado general y queremos evitar crear instacias a partir de la misma.
// La palabra reservada static se usa para definir un miembro visible a nivel de clase.
// Se usa la palabra reservada readonly para marcar un miembro de una clase como solo lectura.


export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

//superclase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() { return this._id }
    // set id(id: number) {this._id = id} // La definición de _id es inservible.
    
    get title() { return this._title }
    set title(t: string) {this._title = t}
}

// clase picture
class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    private _orientation: PhotoOrientation;
    public constructor( id: number, title: string, orientation: PhotoOrientation ) {
        super(id, title);
        this._orientation = orientation;
    }

    private toString() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`
    }
}
// clase album
class Album extends Item{
    private _pictures: Picture[];

    public constructor( id: number, title: string ) {
        super(id, title);
        this._pictures = [];
    }

    get picture() { return this._pictures }
    set picture(pic:Picture[]) {this._pictures = pic}

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
    }
}

let album: Album = new Album(100, 'Photos of mine');
const newPic: Picture = new Picture(2, 'my new pic!', PhotoOrientation.Panorama);
const new2Pic: Picture = new Picture(3, 'my 2nd new pic!', PhotoOrientation.Portrait);
const new3Pic: Picture = new Picture(4, 'my 3rd new pic!', PhotoOrientation.Portrait);

// Primer estado del álbum
console.log('album inicial-> ', album);

//cambiar id de álbum ó fotos
/* new2Pic.id = 300;   Se hacen inútiles debido
new3Pic.id = 400;      a la propiedad de readonly   */

//cambiar titulo de álbum
album.title = 'Mi nuevo álbum de fotos !';

//agregar más fotos a mi álbum
album.addPicture(newPic);
album.addPicture(new2Pic);
album.addPicture(new3Pic); 
console.log('album modificado -> ', album);

// const item = new Item(1, 'Test Title'); // Realmente no tiene sentido usar ésto,
// console.log('item', item)               // pues Item es muuy general.

console.log('PhotoOrientation', PhotoOrientation);



// -- Import and Exports -------------------------------------------------------------------------------------------------

// Nice repo:
// https://github.com/castellanosfelipe/Class-examples-Javascript-and-typescript.

// Tambien pueden hacer los exports de esta manera:

export {
    PhotoOrientation,
    Item,
    Album,
    Picture,
    User,
};


// Codefile: photo-album.ts -- 
export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

export class User {
    private album: Album[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean){
        this.album = [];
    }

    addAlbum(album: Album){
        this.album.push(album);
    }
}

export class Item {
    constructor(public readonly id: number,
                protected title: string) {
    }
}

export class Album extends Item{
    picture: Picture[];

    constructor(id: number, title: string) {
        super(id, title);
        this.picture = [];
    }

    addPicture(picture: Picture) {
        this.picture.push(picture);
    }
}

export class Picture extends Item{
    constructor(id: number, 
                title: string,
                private _date: string,
                private _orientation: PhotoOrientation) {
        super(id, title);
    }

    toString(): string {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
    }
}

// Codefile: main.ts -- 
import {User, Album, Picture, PhotoOrientation} from './photo-app';

const user = new User(1, 'luixaviles', 'Luis', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2020-03', PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);



// -- Single Responsibility Principle ---------------------------------------------------------------------------------------------------

// Principio de responsabilidad unica. Idealmente un archivo deberia tener un proposito o responsabilidad unica: definir una clase, una interfaz, un enumerado, etc.
// Esto mejora la legibilidad de codigo, facilita la lectura, testing y favorece su mantenimiento.
// Utilizamos archivos separados y la utilizacion de import, export para lograr un poco mas de mantenibiilidad. Podemos usar tambien carpetas para separar nuestros archivos.


// SOLID  Principle: https://en.wikipedia.org/wiki/SOLID

// existen los path alias para que no tengamos que lidiar con esa mano de puntos y slash en nuestros proyectos.
// Esta configuración la pueden poner en el ts.config.json dentro de compilerOptions y así pueden acceder al shortcut @item para llegar a esa carpeta en específico que están buscando.
// Para el ejemplo yo tengo una carpeta item y dentro el archivo index.ts.






// -- Resolviendo modulos - Resolving Modules ---------------------------------------------------------------------------------------

// Paths: 

"paths": { 
    "@item": ["item/index.ts"],
  }

// y así se podría importar
  
import { Item }  from  '@item'

//--- 

// Resolviendo Modulos: Typescript resuelve la ubicacion de modulos observando referencias relativas y no relativas.
// Posteriormente intenta localizar el modulo usando una estrategia de resolucion de modulos.

// tsc --moduleResolution node
// tsc --moduleResolution classic
// diferencias
// node: Modulos CommonJs o UMD, mas opciones de configuración
// classic: Modulos AMD, System, ES2015, poco configurable

// en tsconfig.json: 

"moduleResolution": "node|classic"
"traceResolution":true



// -- Configuring for Webpack ----------------------------------------------------------------------------------------------------


// file: webpack.config.ts 
module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    }
}


// usefull command: 
// npm install ts-loader --save-dev
// npm run build
// npm remove -D webpack
// npm i -D webpack@4.42.0


// Documentation at: https://webpack.js.org/guides/typescript/ 









