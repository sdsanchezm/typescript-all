"use strict";
exports.__esModule = true;
exports.Person = void 0;
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
exports.Person = Person;
