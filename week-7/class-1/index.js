const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const { z } = require("zod");
const { user } = require("pg/lib/defaults");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const { UserModel, TodoModel } = require("./db/db");
const { default: mongoose } = require("mongoose");
const app = express();
const { auth } = require("./middleware/auth");
mongoose.connect(process.env.DB_URL); //connect your db url

app.use(express.json());

//input validation

app.post("/signup", async function (req, res) {
  //check password must constain uppercase ,special char,lowercase,number
  const requiredBody = z.object({
    email: z.string().email(),
    name: z.string().min(3).max(100),
    password: z.string().min(5).max(32),
  });
  //parse the data
  const parsedBodyWithSuccess = requiredBody.safeParse(req.body);
  //input validation
  /*
  req.body{
  email:string
  password:string
  name:string
  }
  */
  if (!parsedBodyWithSuccess.success) {
    res.json({
      msg: "incorrect Format",
      err: parsedBodyWithSuccess.error,
    });
    return;
  }
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    res.json({
      msg: "something went wrong",
    });
    return;
  }

  console.log({
    email,
    password,
    name,
  });
  res.json({
    msg: "You are signed-up",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await UserModel.findOne({
      email: email,
    });
    if (!user) {
      res.status(403).json({
        msg: "user doesn't exist",
      });
    }
    //imp
    const passwordMatched = await bcrypt.compareSync(password, user.password);
    console.log(user);

    if (passwordMatched) {
      const token = jwt.sign(
        {
          id: user._id.toString(),
        },
        JWT_SECRET
      );

      res.json({
        token: token,
      });
    } else {
      res.status(403).json({
        msg: "Incorrect credentials",
      });
    }
  } catch (e) {
    res.json({ msg: "Something went wrong" });
  }
});
app.use(auth);
//auth
app.post("/todo", function (req, res) {
  const userId = req.userId;
});

app.get("/todos", function (req, res) {
  const userId = req.userId;
  res.json({
    userId: userId,
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
