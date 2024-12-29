"use client";
import {TextInput} from "@repo/ui/text-input";
import {useRouter} from "next/navigation";
import React from "react";
export default function Home() {
  const [roomID,setRoomId] = React.useState("");
  const router = useRouter();
  return (
    <div style={{
      height:"100vh",
      display:"flex",
      width:"100vw",
      justifyContent:"center",
      alignItems:"center",
      background:"black",
      justifyItems:"center",
      padding:"10px",
    }}>
      <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:"10px",
        background:"white",
        padding:"10px",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px 0px black",
      }}>
     <TextInput placeholder="Enter Room Name" size="small" onChange={(e)=>{
console.log(e.target.value);
setRoomId(e.target.value);
     }}/>
      <button onClick={()=>{
        router.push("/chat/"+roomID);
      }}>Join Room</button>
      </div>
      
    </div>
  );
}
