//authentication is just for checking is the same who it claims to be

//authorization means is it authorize to delete or update it

const express = require("express");
const jwt = require("jsonwebtoken");
const { password } = require("pg/lib/defaults");
const JWT_SECRET = "randomChaiLover";
const app = express();

app.use(express.json());

const users = [];
function logger(req, res, next) {
  console.log(`${req.method} request come `);
  next();
}
app.use(logger);
//sign-out
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/sign-up", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find((user) => user.username == username);
  if (user) {
    res.json({
      msg: "Already username taken",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "Succesfully registered",
  });

  console.log(users);
});
//sign-in
app.post("/sign-in", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const foundUser = users.find(
    (user) => user.username === username && user.password == password
  );
  if (foundUser) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    ); // decoded by anyone verify by us only
    res.json({
      token: token,
    });
  } else {
    res.json({
      msg: "check Credentials",
    });
    return;
  }
});
//jwt checking
// task:- create a auth middleware
function auth(req, res, next) {
  const token = req.headers.token;

  const verifyData = jwt.verify(token, JWT_SECRET);
  if (verifyData.username) {
    //modifying the request object so that next handler will get it
    req.username = verifyData.username;
    next();
  } else {
    res.json({
      msg: "You are not logged in",
    });
  }
}

app.get("/me", auth, function (req, res) {
  let u = users.find((user) => user.username === req.username);
  if (!u) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.json({
    username: u.username,
    password: u.password,
  });
});

app.listen(3000, () => {
  console.log("Server Running");
});
