const mongoose = require("mongoose");
const { password } = require("pg/lib/defaults");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//schema
const User = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});
const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId,
});

// model

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);
module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
