"use client"
import axios from "axios";
import { useState } from "react";
const signIn = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div className="text-lg h-screen w-screen flex flex-col items-center justify-center gap-2">
            <div>
            sign In here....
            </div>
            <div className="flex flex-col gap-3 p-2 ">
                <input placeholder="Email" type="email" className="rounded-md text-white bg-slate-800   w-[25em] h-[2em]" onChange={e=>{
                  setEmail(e.target.value)
                }}></input>
                <input placeholder="Enter Password" type="password"className="rounded-md text-white bg-slate-800  w-[25em] h-[2em]" onChange={e=>{
                  setPassword(e.target.value) 
                }}></input>
                <button onClick={()=>{ axios.post("http://localhost:3000/api/v1/signin",{
                  email,
                  password
                })
                
            }} className="border border-lime-100 rounded-md">Sign In</button>
            </div>
    
        </div>
  )
}

export default signIn