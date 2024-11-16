const express = require("express");
const app = express();
const PORT = 3000;

let requestCount = 0;

//express is the chain of middlewares

function requestCounter(req, res, next) {
  requestCount++;
  console.log(`Total Number of Request ${requestCount}`);
  next();
  //   res.json({
  //     msg: "I ended your request",
  //   });
}
function realSumHandler(req, res) {
  //   requestCounter(req, res);
  //main logic
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
}
app.get("/admin", function (req, res) {
  res.json({
    msg: `The total number of request are ${requestCount}`,
  });
});

function middleware(req, res, next) {
  console.log(`Method is: ${req.method}`);
  console.log(`URL is: ${req.url}`);
  console.log("Date is: " + new Date());
  next();
}

app.use(middleware);

app.get("/sum", requestCounter, realSumHandler);

function realMultiplyHandler(req, res) {
  //   requestCounter(req, res);
  //main logic
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
}
app.get("/multiply", requestCounter, realMultiplyHandler);

function realDivideHandler(req, res) {
  //   requestCounter(req, res);
  //main logic
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b,
  });
}
app.get("/divide", requestCounter, realDivideHandler);

function realSubtractHandler(req, res) {
  //   requestCounter(req, res);
  //main logic
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
}

app.get("/subtract", requestCounter, realSubtractHandler);

app.use(express.json()); //middleware for parsing json object in the body for post request
app.post("/divide", requestCounter, function (req, res) {
  console.log(req.body);
});
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
//middlewares -> req,res,next kind of function
// -->modifying the request object
// -->ending the request response cycle example->blocking used in auth
// -->call next fucntion which is actual call the route
