// map arrow and filter
function sum(a, b) {
  return a + b;
}

console.log("Sum is: " + sum(10, 3));

// is same as
let sumUsingArrow = (a, b) => {
  return a + b;
};
console.log("Sum is: " + sumUsingArrow(10, 2));

// map function

// given an array make a new array which is twice of every value
const input = [1, 2, 3, 4, 5];
let newArr = [];
for (let i = 0; i < input.length; i++) {
  newArr.push(input[i] * 2);
}
console.log(newArr);
// you can also solve by

function transform(i) {
  return i * 2;
}
const ans = input.map(transform);
console.log(ans);

//filter

//given value return all even values
let eveValue = [];
for (let i = 0; i < input.length; i++) {
  if (!(input[i] & 1)) {
    eveValue.push(input[i]);
  }
}

console.log(eveValue);

function filterLogic(n) {
  if (n & 1) return 0;
  else return 1;
}
const sol = input.filter(filterLogic);
console.log(sol);
