"use strict";
var fn = function () { return 'hello-world'; };
var a = 101111;
var num;
var arr = [10, 20, 30];
var tuple = [1, "hello"];
console.log(fn());
console.log("Number is " + a);
console.log("Arr " + arr);
num = arr.pop();
console.log("Value from Arr " + num);
function add(a, b) {
    return a + b;
}
function addFlex(a, b, bOpt, c) {
    if (bOpt === void 0) { bOpt = 2; }
    if (c) {
        return a + b + bOpt + c;
    }
    return a + b + bOpt;
}
var sum = add(1, 2);
console.log(sum);
var sumFlex = addFlex(1, 2);
console.log(sumFlex);
sumFlex = addFlex(1, 2, 3, 10);
console.log(sumFlex);
// UNION type -- allowing a variable to take either type A or type B
var flexVar;
flexVar = 10;
flexVar = "hell0";
// flexVar = true; --> error
console.log(flexVar);
