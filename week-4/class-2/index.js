const express = require("express");
const app = express();
const PORT = 3000;

//route handlers
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/", (req, res) => {
  res.send("<b>Got a POST request</b>");
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
