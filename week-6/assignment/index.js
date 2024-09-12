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

//Auth

app.get("/", function (req, res) {
  for (let i = 0; i < todos.length; i++) {
    res.json({
      item: todos[i].todo,
    });
  }
});
//create Todo
app.get("/create", function (req, res) {});

// Delete Todo

//edit Todo

//

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
