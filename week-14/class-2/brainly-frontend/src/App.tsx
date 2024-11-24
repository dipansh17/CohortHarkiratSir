import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'

function App() {
  function buttonHandler(){

  }
  return (
    <>
      <div>
        <p className='text-3xl text-red-600 m-0 p-0 '>Hi there</p>
        <Button varient='primary' text='Share'/>
        <Button varient='Secondary' text='Add Content'/>
       </div>
    </>
  )
}

export default App
