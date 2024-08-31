function sum(a, b) {
  console.log("in sum");
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  console.log("in do op");
  return op(a, b);
}

console.log(doOperation(1, 2, sum));

function first() {
  // console.log("First");
}
function second() {
  first();
  // console.log("Second");
}
// second();
