const fs = require("fs");

// const contents = fs.readFileSync("introduction.txt", "utf8");
// console.log(contents);
// console.log("dipansh");
// const content2 = fs.readFileSync("b.txt", "utf-8");
// console.log(content2);
//doubt
// resolved
function callbackFunction(err, data) {
  console.log("U are in  call back funct");
  console.log(err);
  console.log(data);
}

// const contents = fs.readFile("introduction.txt", "utf8", callbackFunction);
const contents = fs.readFile("introduction.txt", "utf8", function (err, data) {
  if (err) console.log(err);
  else console.log(data);
}); //async function

// console.log(contents);
// console.log("dipansh");
// const content2 = fs.readFileSync("b.txt", "utf-8");
// console.log(content2);
