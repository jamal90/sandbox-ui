const fn = () => 'hello-world';
const a:number = 101111;
let num:number;

const arr:number[] = [10, 20, 30];
const tuple:[number, string] = [1, "hello"];

console.log(fn());
console.log("Number is " + a);
console.log("Arr " + arr);

num = arr.pop();

console.log("Value from Arr " + num);

function add (a: number, b: number): number {
    return a + b;
}

function addFlex (a: number, b: number, bOpt = 2, c?: number) {
    if (c) {
        return a + b + bOpt + c;
    }
    return a + b + bOpt;
}

const sum = add(1, 2);
console.log(sum);

let sumFlex = addFlex(1, 2);
console.log(sumFlex);

sumFlex = addFlex(1,2, 3, 10)
console.log(sumFlex);


// UNION type -- allowing a variable to take either type A or type B
let flexVar : number | string;
flexVar = 10;
flexVar = "hell0";

// flexVar = true; --> error

console.log(flexVar);