let firstName = "dipansh";
console.log(typeof firstName + " " + firstName);
firstName = 100;
console.log(typeof firstName + " " + firstName);
firstName = false;
console.log(typeof firstName + " " + firstName);
firstName = { dipansh: 1 };
console.log(typeof firstName + " " + firstName);
// let a = 0;
// while (1) {
//   a++;
// }
var age = 30;
console.log(age);
age = 10;
console.log(age);
const isPresent = false;
console.log(isPresent);
let users = ["manu", "pokkie", "hehe"];
console.log(users);

for (let i = 0; i < users.length; i++) console.log(users[i]);

// let canVote = age >= 18;
// console.log("Able to vote: " + canVote);
firstName = "dipansh";
function greetPerson(firstName) {
  return "Hello " + firstName;
}
console.log(greetPerson(firstName));

function sum(a, b) {
  return a + b;
}
let totalSum = sum("1", 2);
console.log("totalSum is: " + totalSum);

function canVote(age) {
  if (age > 18 && age <= 115) return true;
  else if (age > 115) {
    console.log("Can't Vote You are not alive ->");
    return false;
  } else {
    return false;
  }
}
let ableToVote = canVote(age);
console.log("Can Vote: " + ableToVote);

let num = 1;
function checkEven(num) {
  if (num & 1) return true;
  else return false;
}
let isOdd = checkEven(num);
console.log("isOdd: " + isOdd);

let sumOfNum = 10;
function sumOfNumbers(sumOfNum) {
  let ans = 0;
  for (let i = 0; i <= sumOfNum; i++) ans += i;
  return ans;
}
let result = sumOfNumbers(sumOfNum);
console.log("Sum of consecutive numbers are: " + result);

//objects in js
let user = { firstName: "dipansh", age: 20, gender: "male" };
console.log(user.gender);

function greetings(user) {
  console.log("Hello " + user.firstName + " your age is: " + user.age);
}
greetings(user);

function greetingProMax(user) {
  let pronoun = "Mr";
  if (user.gender == "female") pronoun = "Ms";
  console.log(
    "Hello " + pronoun + " " + user.firstName + " your age is: " + user.age
  );
}
greetingProMax(user);

//Assignment
const user1 = [
  { firstName: "dipansh", age: 22, gender: "male" },
  { firstName: "priya", age: 24, gender: "Female" },
  { firstName: "hehe", age: 62, gender: "male" },
];

//use of filter and reduce and map and new array, push to new array
function customAs(user1) {
  let arr = [];
  for (let i = 0; i < user1.length; i++) {
    if (user1[i].gender === "male" && user1[i].age > 18) {
      arr.push(user1[i]);
    }
  }
  return arr;
}
console.log(customAs(user1));
