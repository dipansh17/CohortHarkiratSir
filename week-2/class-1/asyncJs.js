// cast it into nymber of parse it
// use of typescript
function sum(a, b) {
  return a + b;
}
function sumToN(n) {
  let ans = 0;
  //   for (let i = 0; i <= n; i++) ans += i;
  ans = (n * (n + 1)) / 2;
  return ans;
}
console.log("ans is:" + sum(2, 3));
console.log("ans is:" + sumToN(10));

// how to take input from user in js
//  try to create promisified version of set timeout and fetch fs.readFile
// promise and callbacks
// what is callback?
// how to make set timeout synchromno
// what makes a function async
// writing a promise
