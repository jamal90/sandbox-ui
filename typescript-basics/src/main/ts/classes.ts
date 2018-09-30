export class Person {
    private readonly firstName: string;
    private readonly lastName: string;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName;
    }

    // Typescript doesn't allow multiple constructors
    getFullName (): string {
        return this.firstName + " " + this.lastName;
    }
}

class PersonABC {

    // if the class's constructor has public / private /protected, then it automatically becomes the class members
    constructor (private firstName: string, private lastName: string) {

    }
}

class EmployedPerson extends Person{
    job: string;

    constructor(firstName, lastName, job) {
        super(firstName, lastName);
        this.job = job;
    }
}

// import would actually execute all the statements here
// so console.log gets printed
const person1 = new Person("Jams", "J");
// person1.firstName = "Jams";
// person1.lastName = "J";

console.log(person1.getFirstName());
console.log("Full Name: " + person1.getFullName());

console.log(person1);

const empPerson1 = new EmployedPerson("Jams", "J", "Software Engineer");
console.log(empPerson1);