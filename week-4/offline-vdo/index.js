// const express = require("express");
// const app = express();
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) sum += i;
//   return sum;
// }
// app.get("/calcSum", function (req, res) {
//   console.log(req.query);
//   const n = req.query.n;
//   const ans = calcSum(n);
//   res.send(ans.toString());
// });
// app.listen(3000, function () {
//   console.log("Running at port 3000");
// });

var users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];
const express = require("express");
const app = express();
//filter in js
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  var numberOfHealthyKidney = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy == true) {
      numberOfHealthyKidney++;
    }
  }
  res.json({
    johnKidneys,
    numberOfHealthyKidney,
  });
});
//middleware
app.use(express.json());

app.post("/", function (req, res) {
  //query parameter
  const isHealthy = req.body.healthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done!",
  });
});
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = false;
  }
  res.json({
    msg: "done!",
  });
});
app.delete("/", function (req, res) {
  // const johnKidneys = users[0].kidneys;
  // johnKidneys.pop();
  // if no healkthy to delete send 411
  if (isAtleastOneHealthyKidney()) {
    const newKidney = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidney.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidney;
    res.json({
      msg: "done!",
    });
  } else
    res.send(411).json({
      msg: "No bad Kidney ",
    });
});
function isAtleastOneHealthyKidney() {
  let atleastOneHealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      atleastOneHealthyKidney = true;
    }
  }
  return atleastOneHealthyKidney;
}
app.listen(3000);
