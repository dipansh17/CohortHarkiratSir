import { useEffect, useRef, useState } from 'react'
import './App.css'
// const ws=new WebSocket("http://localhost:3000"); //bad practice
function App() {
  const [message,setMessage]=useState(["hello","hi","hiii"]);
  const [inputMessage,setInputMessage]=useState();
  const wsRef=useRef();
useEffect(()=>{ //on mounting
  const ws=new WebSocket("ws://localhost:8080");
  ws.onmessage=(event)=>{
    setMessage(m=>[...m,event.data])
  }
  // @ts-ignore
  wsRef.current=ws;
  ws.onopen=()=>{
    ws.send(JSON.stringify({
      type:"join",
      payload:{
        roomId:"red"
      }
    }))
  }
}
,[])
const handleChange=(e)=>{
  // console.log(e.target.value);
  setInputMessage(e.target.value)
}

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleChange(e);
    }
  }

  return (
    <>
      <div className='h-screen bg-slate-700 text-white '>
        <div className='h-[90vh]'>
          <br></br>
          <br></br>
          <br></br>
          {message.map(message=><div className='m-8'><span className='bg-white text-black rounded-md m-8 p-4 relative '>{message}</span></div>)}
        </div>
        <div className='w-full bg-white flex'>
          <input className=' flex-1 p-4 text-black' type='text' value={inputMessage} onChange={handleChange} onKeyDown={handleKeyDown} // Trigger on Enter key press
        placeholder="Type your message" ></input>
          <button className='bg-purple-600 text-white p-4' onClick={()=>{
            // @ts-ignore
            wsRef.current.send(JSON.stringify({
              type:"chat",
              payload:{
              message:inputMessage
              }
            }))
            setInputMessage("");
          }} >Send Message</button>

        </div>
       </div>
    </>
  )
}

export default App
