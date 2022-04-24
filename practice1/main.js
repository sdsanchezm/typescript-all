"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Student_1 = require("./Student");
var person_1 = new Person_1.Person(1, 'jamecho', 'sanchez');
var student_1 = new Student_1.Student(32, 'amparo', 'sanchez', 32);
console.log(student_1.checkData());
student_1.showAllStudents();
