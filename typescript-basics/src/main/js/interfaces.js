"use strict";
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    Programmer.prototype.greet = function () {
        return "Hello World! I'm " + this.firstName;
    };
    return Programmer;
}());
var programmer = new Programmer();
programmer.firstName = "Jams";
console.log(programmer.greet());
// Duck typing
// though randomProg is just an object, with duck typing we can assign it to be of type Person interface.
// and since the structure matches, TS considers this be a Person object
// as long as properties match exactly, then it's fine. // but can have additional properties
var randomProg = {
    firstName: "Jamal",
    lastName: "J",
    greet: function () { return "Hello there! -- Jamal"; }
};
