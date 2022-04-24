export class Person{
    public id: number;
    public firstname: string;
    public lastname: string;

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