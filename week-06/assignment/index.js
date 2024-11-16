const { default: axios } = require("axios");
const express = require("express");
const app = express();
const PORT = 3000;
let todos = [
  {
    id: 1,
    todo: "Do work",
    isEdit: false,
  },
];

app.use(express.json());

async function signup() {
  // console.log("you are in signup");
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  try {
    const response = await axios.post("http://localhost:3000/signup", {
      username,
      password,
    });
    console.log(response.data.message);
  } catch (error) {
    console.log("error while signing up: ", error);
  }
}
async function signin() {
  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;
  try {
    const response = await axios.post("http://localhost:3000/signin", {
      username,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      loadTodo();
    } else {
      console.log("error  in: ", response.data.message);
    }
  } catch (error) {
    console.log("error while signing in: ", error);
  }
}

async function loadTodo() {
  try {
    const response = await axios.get("http://localhost:3000/", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const listItem = document.getElementById("todo-list");
  } catch (error) {}
}
function logout() {
  localStorage.removeItem("token");
  console.log("you are logged out");
  document.getElementById("todo-list").innerText = "";
}
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
