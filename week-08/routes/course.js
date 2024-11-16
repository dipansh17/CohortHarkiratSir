const { Router } = require("express");
const courseRouter = Router();
const { userMiddleware } = require("../middleware/user");
const { courseModel, purchaseModel, puchaseModel } = require("../db");

courseRouter.post("/all", function (req, res) {
  res.json({
    message: "courses Endpoint",
  });
});

courseRouter.post("/puchase", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;
  //should check that user has actually puchases the course or not
  await puchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    message:
      " purchase course Endpoint || you have successfully bought the course",
  });
});
courseRouter.get("/preview", async function (req, res) {
  const courses = await courseModel.find({});
  res.json({
    message: "Course Preview",
    courses: courses,
  });
});
module.exports = {
  courseRouter: courseRouter,
};
