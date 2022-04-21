var Person = /** @class */ (function () {
    function Person(id, firstname, lastname) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.checkData = function () {
        return "\n        id: ".concat(this.id, ",\n        Name: ").concat(this.firstname, ",\n        Last Name: ").concat(this.lastname);
    };
    return Person;
}());
var person_1 = new Person(1, 'jamecho', 'sanchez');
console.log(person_1.checkData());
