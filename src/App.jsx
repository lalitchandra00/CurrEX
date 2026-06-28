import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "bg-amber-800 flex-wrap justify-center">
        <h1 className = " text-5xl  ">Hello Welcome to CurrEX</h1>
        <h2>Get values for your currency worldwide here</h2>

      </div>
      
    </>
  )
}

export default App
