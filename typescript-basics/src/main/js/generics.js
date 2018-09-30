"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
function echo(arg) {
    return arg;
}
var myArg = echo(1);
var myArg2 = echo(1); // error!
myArg2 = echo("hell");
var person = echo(new classes_1.Person("Jam", "J"));
console.log(person);
