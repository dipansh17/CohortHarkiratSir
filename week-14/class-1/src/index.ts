// we are making second brain
import express,{Express,Request,Response} from "express";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "./db";
const app:Express=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("Running on posrt 3000");
})
app.post("/api/v1/signup",async function(req,res){
    //zod validation,hash the password
    const username=req.body.username;
    const password=req.body.password;

    await UserModel.create({
        username:username,
        password:password
    })
    res.json({
        message:"Successfully added"
    })

})
app.get("/api/v1/signin",function(req,res){

})
app.post("/api/v1/content",function(req,res){

})
app.get("/api/v1/content",function(req,res){

})
app.delete("/api/v1/content",function(req,res){

})
app.post("/api/v1/brain/share",function(req,res){

})
app.get("/api/v1/brain/:shareLink",function(req,res){

})