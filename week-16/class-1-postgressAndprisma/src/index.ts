import { Client } from "pg";
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 
// @ts-ignore
const DB:string | undefined= process.env.CONNECTION_DB;
// @ts-ignore
const pgClient = new Client(DB);

async function main(){
    await pgClient.connect();    
}
async function resultData(){
const result=await pgClient.query("SELECT * FROM users");
console.log(result);}
main();
resultData();