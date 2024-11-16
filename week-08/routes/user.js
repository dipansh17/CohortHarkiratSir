const { Router } = require("express");
const userRouter = Router();
const { UserSchema, userModel, purchaseModel, courseModel } = require("../db");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const { userMiddleware } = require("../middleware/user");
const express = require("express");

userRouter.post("/signup", async function (req, res) {
  try {
    const { email, password, firstName, lastName } = req.body; //adding zod validation

    //add password using bcrypt and hash the password
    await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({
      message: "signup Endpoint of user and user signedup successfully",
    });
  } catch (error) {
    res.status(403).json({
      message: "Something went wrong",
    });
  }
});
userRouter.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({
      email: email,
      password: password,
    });
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_USER_PASSWORD
      );
      res.json({
        token: token,
        message: "user signin Endpoint and login successfully",
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "something went wrong || incorrect credentials",
    });
  }
});
userRouter.get("/purchases", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const purchases = await purchaseModel.find({
    userId,
  });
  const courseData = await courseModel.find({
    _id: { $in: purchases.map((x) => x.courseId) },
  });
  res.json({
    purchases,
    courseData,
    message: "user purchase Endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
