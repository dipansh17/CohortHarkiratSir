const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
//zod and jsonwebtoken
const { z } = require("zod");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const express = require("express");
adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body; //adding zod validation

  //add password using bcrypt and hash the password
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8).regex(/@/), // password should be at least 8 characters and include "@"
  });

  // Validate input
  const validation = schema.safeParse({ email, password });

  if (!validation.success) {
    invalidBody = true;
    res.status(403).json({
      message: "fix username or password",
    });
    return;
  } else {
    try {
      await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      res.json({
        message: "admin signup Endpoint and signup completed",
      });
    } catch (error) {
      res.status(403).json({
        message: "Something went wrong",
      });
    }
  }
});

adminRouter.post("/signin", async function (req, res) {
  //ideally ppassword should be hashed and hence you cant comapre the user compared password

  try {
    const { email, password } = req.body;
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(8).regex(/@/), // password should be at least 8 characters and include "@"
    });

    // Validate input
    const validation = schema.safeParse({ email, password });

    if (!validation.success) {
      invalidBody = true;
      res.status(403).json({
        message: "fix username or password",
      });
      return;
    }
    const user = await adminModel.findOne({
      email: email,
      password: password,
    });
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_ADMIN_PASSWORD
      );
      res.json({
        token: token,
        message: "admin signin Endpoint and login successfully",
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "something went wrong || incorrect credentials",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;
  try {
    const course = await courseModel.create({
      title,
      description,
      imageUrl,
      price,
      creatorId: adminId,
    });
    console.log("hello");
    res.json({
      statusOfCourse: "course Created",
      courseId: course._id,
      message: "admin course Endpoint",
    });
  } catch (error) {
    res.status(403).json({
      message: "Sowmthing went wrong",
      error: error.message,
    });
  }
});

adminRouter.put("/course", adminMiddleware, async function (req, res) {
  try {
    const adminId = req.userId;
    const { title, description, imageURL, price, courseId } = req.body;

    const course = await courseModel.updateOne(
      {
        _id: courseId,
        creatorId: adminId,
      },
      {
        title: title,
        description: description,
        imageUrl: imageURL,
        price: price,
      }
    );
    res.json({
      statusOfCourse: "course updated",
      courseId: course._id,
      message: "admin course Endpoint",
    });
  } catch (error) {
    res.status(403).json({
      message: "Sowmthing went wrong",
      error,
    });
  }
});

adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
  try {
    const adminId = req.userId;

    const courses = await courseModel.find({
      creatorId: adminId,
    });
    res.json({
      message: "admin course Endpoint here is all courses",
      courses: courses,
    });
  } catch (error) {
    res.status(403).json({
      message: "Sowmthing went wrong",
    });
  }
});

module.exports = {
  adminRouter: adminRouter,
};
