"use strict";
var _a;
//2 sum
function twoSum(a, b) {
    return a + b;
}
//hello world in type script
function isEven(a) {
    if (a & 1)
        return false;
    return true;
}
function printArr(a) {
    let ans = [];
    for (let i = 0; i < a; i++) {
        ans.push(i);
    }
    return ans;
}
let user = {
    name: "dipansh",
    age: 22,
    address: {
        city: "delhi",
    }
};
let user2 = {
    name: "dipansh",
    age: 22,
    greet: () => {
        return "hi";
    }
};
class Manager {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    isLeg() {
        return this.age > 18;
    }
}
class highManager extends Manager {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
}
let result = twoSum(4, 4);
console.log("The result is: " + result);
let isEvenResult = isEven(4);
console.log(isEvenResult);
console.log(printArr(3));
if (user.age >= 18 && ((_a = user.address) === null || _a === void 0 ? void 0 : _a.city) == "bfibidbv") {
    console.log("You are legal");
}
else {
    console.log("You are not Allowed");
}
// console.log(user2.greet());
const m = new Manager("dipansh", 100);
console.log(m.isLeg());
function greet(user) {
    console.log(user.name);
}
//find max in arr
function getMax(nums) {
    let maxValue = -10000000000;
    for (let i = 0; i < nums.length; i++) {
        maxValue = Math.max(nums[i], maxValue);
    }
    return maxValue;
}
let nums = [1, 2, 3, 4];
let maxValue = getMax(nums);
console.log(maxValue);
