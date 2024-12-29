import  express from "express";
const app=express();
app.get("/signup",(req,res)=>{
    // res.send("Hello World");
    res.json({message:"Signup"});
});
app.get("/signin",(req,res)=>{
    res.json({message:"Signin"});
    
});
app.get("/chat",(req,res)=>{
    res.json({message:"chat"});
    
});
app.listen(8080,()=>{
    console.log("Server is running on port 8000");
});