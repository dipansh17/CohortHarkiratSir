import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socketws,setSocketws]=useState("");
  const inputRef=useRef();
  function SendMessage(){
    if(!socketws)return; 
    // @ts-ignore
    const message=inputRef.current.value;
    socketws.send(message);
  }
  useEffect(()=>{
    const ws=new WebSocket("ws://localhost:8080");
    setSocketws(ws);
    ws.onmessage=(ev)=>{
      alert(ev.data)
    }
  },[])
  return (
    <>
      <div className=' border border-yellow-500 px-2 px-4'>
        <input ref={inputRef} type='text' placeholder='Message..'></input>
        <button onClick={SendMessage}>Send</button>
       </div>
    </>
  )
}

export default App
