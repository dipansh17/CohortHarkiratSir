function addTodo() {
  let inputEle = document.querySelector("input");
  console.log("Button clicked and adeded" + inputEle.value);
}

var frontName = "dipansh";
console.log(frontName);
const inputElement = document.querySelector("input");
console.log(inputElement);
// console.log(document);
const h1Ele = document.querySelector("h1");
console.log("h1 tag contain: " + h1Ele.innerHTML);

const buttonEle = document.querySelector("button");
console.log("button contain: " + buttonEle.innerHTML);

const h4Ele = document.querySelector("h4");
console.log("h4 tag contain: " + h4Ele.innerHTML);

const getElem = document.getElementById(".Todo1");
console.log(getElem);

//Q after every 1 second update the element
var counter = 0;
function callback() {
  //   console.log(counter);
  document.querySelectorAll("h4")[1].innerHTML = counter;
  counter++;
}
setInterval(callback, 1000);
