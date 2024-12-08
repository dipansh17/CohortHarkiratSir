import { PrismaClient } from "@prisma/client";
const client=new PrismaClient();
async function createUser(){
await client.user.create({
    data:{
        username:"dipansh",
        password:"123123",
        age:16
    }
})}
async function deleteUser(){
    await client.user.delete({
        where:{
            id:2
        },
    })}
    async function findUser(){
        const username=await client.user.findFirst({
            where:{
                id:3
            },
            select:{
                todos:true
            }
           
        })
        // console.log("user is "+username?.username);
        console.log("user todo: "+username?.todos);
    }
// createUser();
findUser();
// deleteUser();
console.log("hello");