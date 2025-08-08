import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1);
  }

  const removeValue = () => {
    setCount(count - 1);
  }


  return (
    <>
      <div>Counter : {count}</div>

      <button onClick={addValue} >Add Value</button>
      <button onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
