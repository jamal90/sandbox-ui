import {Person} from "./classes";

function echo<T>(arg: T): T {
    return arg;
}

let myArg:number = echo(1);

let myArg2: string = echo(1); // error!
myArg2 = echo("hell");

let person = echo(new Person("Jam", "J"));
console.log(person);