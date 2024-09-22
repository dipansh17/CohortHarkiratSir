const mongoose = require("mongoose");
const { password } = require("pg/lib/defaults");
const user = require("./routes/user");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  __id: ObjectId,
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  //   role: "User" | "Admin", //not going there
});

const CourseSchema = new Schema({
  __id: ObjectId,
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const AdminSchema = new Schema({
  __id: ObjectId,
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const purchaseSchema = new Schema({
  __id: ObjectId,
  courseId: ObjectId,
  userId: ObjectId,
});
const userModel = mongoose.model("user", UserSchema);
const adminModel = mongoose.model("admin", AdminSchema);
const puchaseModel = mongoose.model("purchase", purchaseSchema);
const courseModel = mongoose.model("course", CourseSchema);

module.exports = {
  userModel,
  adminModel,
  puchaseModel,
  courseModel,
};
