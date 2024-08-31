// alert("hi there");
// async function getRecentPost() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log(data);
//   //   document.getElementById("post").innerHTML = data.body;
//   //   document.getElementById("title").innerHTML = data.title;
//   //   document.getElementById("userId").innerHTML = data.userId;
// }
// getRecentPost();
const axios = require("axios");
async function getRecentPost() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  //   const data = await response.json();
  console.log(response.data);
  //   document.getElementById("post").innerHTML = data.body;
  //   document.getElementById("title").innerHTML = data.title;
  //   document.getElementById("userId").innerHTML = data.userId;
}
getRecentPost();
