interface PersonA {
    firstName: string;
    lastName: string;

    greet() : string;
}

class Programmer implements PersonA {
    firstName: string;
    lastName: string;

    greet(): string {
        return "Hello World! I'm " + this.firstName;
    }
}

let programmer = new Programmer();
programmer.firstName = "Jams";
console.log(programmer.greet());

// Duck typing
// though randomProg is just an object, with duck typing we can assign it to be of type Person interface.
// and since the structure matches, TS considers this be a Person object
// as long as properties match exactly, then it's fine. // but can have additional properties
const randomProg:Programmer = {
    firstName: "Jamal",
    lastName: "J",
    greet: () => "Hello there! -- Jamal"
};

