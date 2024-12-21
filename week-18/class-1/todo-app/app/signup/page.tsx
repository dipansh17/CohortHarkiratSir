"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const Router=useRouter();
    return (
        <div className="text-lg h-screen w-screen flex flex-col items-center justify-center gap-2">
            <div>
            sign Up here....
            </div>
            <div className="flex flex-col gap-3 p-2 ">
                <input placeholder="Email" type="email" onChange={e=>{
                    setEmail(e.target.value);
                }} className="rounded-md text-white bg-slate-800 align-center w-[25em] h-[2em]"></input>
                <input placeholder="Enter Password" type="password" onChange={e=>{setPassword(e.target.value)}} className="rounded-md text-white bg-slate-800 align-center w-[25em] h-[2em]"></input>
                <input placeholder="Re-Enter Password" type="password" className="rounded-md text-white bg-slate-800 align-center w-[25em] h-[2em]"></input>
                <button onClick={()=>{ axios.post("http://localhost:3000/api/v1/signup",{
                    email,
                    password
                }
            )
                Router.push("/signin");
            }} className="border border-lime-100 rounded-md">Sign up</button>
            </div>
    
        </div>
      )
}
export default signup;

