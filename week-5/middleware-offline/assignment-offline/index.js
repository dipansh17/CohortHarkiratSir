const express = require("express");
const app = express();
let requestCount = 0;
function countRequest(req, res, next) {
  requestCount++;
  console.log("total number of Request: " + requestCount);
  next();
}
app.use(countRequest);
app.get("/user", function (req, res) {
  res.status(200).json({ firstName: "name" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ account: "Account Created" });
});

app.get("/request", function (req, res) {
  res.status(200).json({ numberOfReq: requestCount });
});
app.listen(3000, () => {
  console.log("Running on port 3000");
});
