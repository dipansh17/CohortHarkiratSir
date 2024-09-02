const express = require("express");
const app = express();

//ride one route

app.get("/ride1", function () {
  res.json({
    msg: "ride1",
  });
});

app.listen(3000, () => {
  console.log("server started");
});
