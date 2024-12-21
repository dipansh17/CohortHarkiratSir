import { NextRequest, NextResponse } from "next/server";
import prisma  from "../../../lib/db"

// const prismaClient = new PrismaClient();  //issue in this in dev mode as jab hum save kengy there will be a new instance of prismaClient and 
// creation
//  of hot  module  reloading to prevent that we would make a singleton instance of prismaClient
export async function POST(req:NextRequest){
    const data=await req.json();
    console.log(data);
    await prisma.user.create({
        data:{
            email:data.email,
            password:data.password,
        }
    })
    return NextResponse.json({
        message:"You have signed Up",
    })

}
export async function GET(req:NextRequest){
const user=await prisma.user.findFirst();
return NextResponse.json({
    user
})
}