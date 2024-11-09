"use strict";
let x = 1;
let y = 2; //working because of type inferecing
console.log("value of x:" + x);
function greet(name) {
    let firstName = name;
    console.log("hello.." + firstName);
}
function twoSum(a, b) {
    let result = a + b;
    console.log("Answer is:" + result);
}
function isLegal(age) {
    if (age > 18) {
        console.log("legal h");
        return true;
    }
    else {
        console.log("Illegal h");
        return false;
    }
}
//write a function that takes another fuction 
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
greet("Dipansh");
//sum of 2 function
twoSum(2, 3);
let legality = isLegal(100);
console.log(legality);
function delayed(anotherFn) {
    setTimeout(() => anotherFn("dipansh"), 1000); // Pass argument when calling `anotherFn`
}
function greet2(name) {
    let firstName = name; // Use lowercase 'string' type
    console.log("hello.." + firstName);
}
delayed(greet2);
