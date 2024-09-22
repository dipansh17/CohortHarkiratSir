const { Router } = require("express");
const userRouter = Router();
const { UserSchema } = require("../db");
userRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup Endpoint",
  });
});
userRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin Endpoint",
  });
});
userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "user purchase Endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
