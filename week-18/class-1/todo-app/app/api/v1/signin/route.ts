import { NextRequest, NextResponse } from "next/server";
// import {PrismaClient} from "@prisma/client";

export async function POST(req:NextRequest){
    // const prisma=new PrismaClient();
    const data=await req.json();
    console.log(data);
    // await prisma.User.create({
    //     email:data.email,
    //     password:data.password
    // })
    return NextResponse.json({
        message:"You have signed In",
    })

}