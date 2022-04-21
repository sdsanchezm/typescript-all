export class Person{
    private id: number;
    private firstname: string;
    private lastname: string;

    constructor(id: number, firstname: string, lastname: string){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;    
    }

    checkData(){
        return `
        id: ${this.id},
        Name: ${this.firstname},
        Last Name: ${this.lastname}`;
    }
}