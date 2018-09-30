"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    // Typescript doesn't allow multiple constructors
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
var PersonABC = /** @class */ (function () {
    // if the class's constructor has public / private /protected, then it automatically becomes the class members
    function PersonABC(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return PersonABC;
}());
var EmployedPerson = /** @class */ (function (_super) {
    __extends(EmployedPerson, _super);
    function EmployedPerson(firstName, lastName, job) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.job = job;
        return _this;
    }
    return EmployedPerson;
}(Person));
// import would actually execute all the statements here
// so console.log gets printed
var person1 = new Person("Jams", "J");
// person1.firstName = "Jams";
// person1.lastName = "J";
console.log(person1.getFirstName());
console.log("Full Name: " + person1.getFullName());
console.log(person1);
var empPerson1 = new EmployedPerson("Jams", "J", "Software Engineer");
console.log(empPerson1);
