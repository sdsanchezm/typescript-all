import { Person } from "./Person";

export class Student extends Person{
    
    public studentId: number;

    constructor(id: number, firstname: string, lastname: string, studentId: number){
        super(id, firstname, lastname);
        this.studentId = studentId;
    }

    showAllStudents(){
        console.log(`id: ${this.id}, name: ${this.firstname} ${this.lastname}, studenId: ${this.studentId}`)
    }
}














