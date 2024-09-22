const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "admin signup Endpoint",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "admin signin Endpoint",
  });
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "admin course Endpoint",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "admin put new couse Endpoint",
  });
});

adminRouter.get("/bulk", function (req, res) {
  res.json({
    message: "admin all course Endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
