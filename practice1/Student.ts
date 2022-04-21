import { Person } from "./Person";

class Student extends Person{
    
    private studentId: number;

    constructor(id: number, firstname: string, lastname: string, studentId: number){
        super(id, firstname, lastname);
        this.studentId = studentId;
    }
}














