const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "dipanshloveschai";
const app = express();
const users = [];
app.use(express.json());
//should return string
function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    // use a simple function here
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/sign-up", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  //checks
  if (username.length < 5) {
    res.json({
      msg: "username is too short!",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });

  res.send({
    msg: "You have signed-up!",
  });
  console.log(users);
});

app.post("/sign-in", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //check that does this user exist
  //   check password
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (foundUser) {
    // const token = generateToken();
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    foundUser.token = token;
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      msg: "Invalid user",
    });
  }
  console.log(users);
});

//another endpoint
//JWT is like a digital ID card that proves your identity with every request, so you don't have to log in repeatedly.

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  const username = decodedInfo.username;
  let foundUser = users.find((user) => user.token === token);
  if (foundUser) {
    res.send({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});
app.listen(3000, () => {
  console.log("Running Server");
});
