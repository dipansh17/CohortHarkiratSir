const express = require("express");
const app = express();
function multiplyNum(a, b) {
  return a * b;
}
app.get("/multiply", function (req, res) {
  //   console.log(req.query.a);
  const a = parseInt(req.query.a);

  const b = parseInt(req.query.b);
  const ans = multiplyNum(a, b);
  //   app.send(ans.toString());
  res.json({
    result: ans,
  });
});
function addNum(a, b) {
  return a + b;
}
app.get("/add", function (req, res) {
  //   const value = req.query;
  const a = parseInt(req.query.a);

  const b = parseInt(req.query.b);
  const ans = addNum(a, b);
  //   app.send(ans.toString());
  res.json({
    result: ans,
  });
});
function divideNum(a, b) {
  return a / b;
}
app.get("/divide", function (req, res) {
  //   const value = req.query;
  const a = parseInt(req.query.a);

  const b = parseInt(req.query.b);
  const ans = divideNum(a, b);
  //   app.send(ans.toString());
  res.json({
    result: ans,
  });
});
function subtractNum(a, b) {
  return a - b;
}
app.get("/subtract", function (req, res) {
  //   const value = req.query;
  const a = parseInt(req.query.a);

  const b = parseInt(req.query.b);
  const ans = subtractNum(a, b);
  //   app.send(ans.toString());
  res.json({
    result: ans,
  });
});
app.listen(3000, () => {
  console.log("Running port");
});
