import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction,Response,Request } from "express";
dotenv.config();
let JWT_PASSWORD:any=process.env.JWT_PASS;
export const userMiddleWare=(req:Request,res:Response,next:NextFunction)=>{
const header=req.headers["authorization"];
const decoded=jwt.verify(header as string,JWT_PASSWORD)
if(decoded){
    // @ts-ignore
    req.userId=decoded.id;
    next();
}
else{
    res.status(403).json({
        message:"You are not logged in"
    })
}

}