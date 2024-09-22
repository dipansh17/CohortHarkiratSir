const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/all", function (req, res) {
  res.json({
    message: "courses Endpoint",
  });
});

courseRouter.post("/puchase", function (req, res) {
  res.json({
    message: " purchase course Endpoint",
  });
});
module.exports = {
  courseRouter: courseRouter,
};
