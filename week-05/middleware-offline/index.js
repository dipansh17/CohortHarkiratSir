const express = require("express");
const app = express();

//ride one route
function checkAge(age) {
  if (age >= 18) return 1;
  else return 0;
}
function checkAgeMiddleware(req, res, next) {
  let age = req.query.age;

  if (age >= 18) {
    next();
    return 1;
  } else {
    res.status(411).json({
      msg: "Sorry bro you don't cross age limit",
    });
  }
}
app.get("/ride1", checkAgeMiddleware, function (req, res) {
  res.json({
    msg: "ride1 is successfully called",
  });
});

app.get("/ride2", checkAgeMiddleware, function (req, res) {
  res.json({
    msg: "ride2 is successfully called",
  });
});
app.listen(3000, () => {
  console.log("server started");
});
