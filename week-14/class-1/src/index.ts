// we are making second brain
import express,{Express,Request,Response} from "express";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
const app:Express=express();
app.listen(3000,()=>{
    console.log("Running on posrt 3000");
})
app.post("/api/v1/signup",function(req,res){

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