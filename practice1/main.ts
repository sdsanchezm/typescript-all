import { Person } from "./Person";
import { Student } from "./Student"

const person_1: Person = new Person(1, 'jamecho', 'sanchez');
const student_1: Student = new Student(32, 'amparo', 'sanchez', 32);
console.log( student_1.checkData() )
student_1.showAllStudents();
