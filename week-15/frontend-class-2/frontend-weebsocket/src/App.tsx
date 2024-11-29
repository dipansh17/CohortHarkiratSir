import { useEffect } from 'react'
import './App.css'
// const ws=new WebSocket("http://localhost:3000"); //bad practice
function App() {
useEffect(()=>{ //on mounting
  const ws=new WebSocket("http://localhost:3000");
},[])

  return (
    <>
      <div className='h-screen bg-black text-white'>
        <div className='h-[95vh]'></div>
        <div className='w-full bg-white flex'>
          <input className=' flex-1 p-4' type='text'></input>
          <button className='bg-purple-500 text-white p-4'>Send Message</button>

        </div>
        <p>Hi there</p>
        <p>Hi there</p>
       </div>
    </>
  )
}

export default App
