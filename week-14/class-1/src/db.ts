import mongoose, { Model,Mongoose,Schema,model } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let DB_URL:any=process.env.DB_URL;

if (!DB_URL) {
    throw new Error("DB_URL is not defined in the environment variables.");
  }
mongoose.connect(DB_URL);

const UserSchema=new Schema({
  _id:mongoose.Types.ObjectId,
    username:{type:String,unique:true},
    password:String
})
export const UserModel= model("User",UserSchema);
const ContentSchema=new Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true,ref:"User" }, 
    link: { type: String, required: true }, 
    type: {
      type: String,
      enum: ["document", "tweet", "youtube", "link"], 
      required: true,
    },
    title:{type:String},
    tags: {type:[String],default:[],ref:'Tag'},
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}


})
export const ContentModel=model("Content",ContentSchema);