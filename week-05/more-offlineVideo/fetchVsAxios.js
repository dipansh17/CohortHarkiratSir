const axios = require("axios");
// const { default: axios } = require("axios");
const { response } = require("express");
//get
function main() {
  fetch("http://localhost:8080/todos").then(async (response) => {
    const json = await response.json();
    console.log(json);
  });
}

async function main2() {
  const response = await axios.get("http://localhost:8080/todos");
  console.log(response.data);
}
main();
main2();
