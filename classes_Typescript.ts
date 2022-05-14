//  classes -------------------------------------------------------


(() => {

    class Heroe {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }

        //Esto es una forma de hacerlo: 
//        constructor( name: string, team: string, realName?: string ){
//            this.name = name;
//            this.team = team;
//            this.realName = realName;
//        }
        
        // esta es otra forma de hacerlo
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string, //esta esta marcada como opcional 
            avgAge : number = 23, //esta no puede ser static; esta no puede estar al final, a menos que un valor sea asignado. las opcionales son las que van de ultimas
        ) {
                Heroe.avgAge = avgAge;
            }

        // si a bio () no se le indica public or private se asume publica 
        public bio() { 
            return `${ this.name } (${ this.team })!!!`
        }


    }


    // const batman: Heroe = new Heroe('Batman', 'The best', 'Bruce Wayne');
    // console.log( batman )

    // console.log( Heroe.getAvgAge() )

})()



// los metodos y propiedades estaticas, solamente pueden ser accedidas usando el nombre de la clase y no mediante instancias de la misma
// private: a private variable is only accessible within the class itself (not even extended) 
// public: a public variable is accessible everywhere in the code
// static: variable belongs to the class rather than to an instance of a class. 
// protected: se puede acceder en la clase y a metodos y propiedades que extiendan esa clase


// Inheritance - Extend - super -------------------------------------------------------
class Person {
	constructor (
		public name: string,
		public username: string,
	) {
		console.log('constructor was called');
	}

	protected getUsername(){
		return `${ this.name } ${ this.username }`
	}
}

class Student extends Person{
	constructor(
		name: string, // si ponebmos el public aca otra vez, estariamos re-declarando, y no es conveniente, por eso se quita el public aca. 
		username: string,
		public isActive: boolean
		){
		super(name, username) // super must be the first element in this part of the constructior
		console.log('constructor Student called')
	}

    //esto es un getter, siempre deben devolver algo
    // getter no recibe nada
    // los getters no se ejecutan asi: wolveriw.fullName() sino solo se mandan a llamar like this: wolverine.fullName
    // la respuesta tiene que ser sincrona
	get fullName() {
		return `${this.name} - ${this.username}`;
	}

    // recibe un valor y el seter debe establecer un valor, es su objetivo
    // debe recibir un argumento 
    // generalmente un solo argumento, no dos o mas
	set fullName(name: string) {
		if ( name.length < 4){
			throw new Error('username min chars: 4')
		}
		this.name = name;
	}

	getUsernameFromStudent(){
		console.log( super.getUsername() )
	}
}

const marcopolo = new Student( 'Marco', 'marcopol', true )
console.log(marcopolo);
marcopolo.fullName = 'Sanders';
console.log(marcopolo);

console.log( marcopolo.fullName );
marcopolo.getUsernameFromStudent();

// esta expression
const gansito = new Person('Jamecho', 'jamk');
// tambien puede ser:
let gansito2: Person; // this is just if we dont gonna innitialize 
// a gansito2 le puedo asignar el producto de uan instancia de esa clase unicamente, no number, no strings. 


//  Abstract Classes in Typescript  -------------------------------------------------------

interface Dimension {
	radius: number;
	area: number;
}

// 
// abstract class Shape {
// 	constructor(
// 		public name: string,
// 		public dimensions: Dimension
// 		){}
// }

abstract class Shape {
		public name: string;
		abstract dimensions(): Dimension;
}

class Square extends Shape{
	constructor(name: string){
		super();
	}
	public dimensions(): Dimension {
		const dimx: Dimension = {
			radius: 1,
			area: 10
		}
		console.log('this is dimensions');
		return dimx;
	}
	printArea(){
		console.log('all good from Square');
	}

}

class Hexagon extends Shape{ // when this class is created, TS requires that the dimensions method is implemented (it somes from Shape)

	sayHi(){
		console.log('this is a good hexagon');
	}
}

const printShapeName = ( instanceOfShape: Square ) => {
	console.log(instanceOfShape.name);
}

// abstract, sirven para creaar otras clases, o para asegurarnos que las otras clases tienen lo que esperamos 
// Las clases abstractas 

// this is not possible, because is an abstract class, it can not be instansieted
// const k1 = new Shape();
const k2 = new Square('test');
k2.printArea();
k2.dimensions();
printShapeName(k2);


// ------- Extend Classes 

class Animal{
	constructor(
		public name: string,
		public animalId: number
		){}
}

class Dog extends Animal{
	constructor(
		name: string,
		animalId: number,
		public isPuppy: boolean
		){
		super(name, animalId);
	}
}


const p1 = new Dog('jamecho', 21, true);
console.log(p1);

const printPuppyDetails = (puppy: Dog) => {
	console.log(`${puppy.name} - ${puppy.animalId} - ${puppy.isPuppy}`)
}

printPuppyDetails(p1);


// Funcion anonima autoinvocada
// Auto-invoqued anonymous function:
( () => { /*code here*/ } )()




















