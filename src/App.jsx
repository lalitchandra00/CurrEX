import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "bg-black w-screen h-screen">
      <h1 className = "text-white text-4xl"> Welcome to CurrEX</h1>
      </div>
    </>
  )
}

export default App
