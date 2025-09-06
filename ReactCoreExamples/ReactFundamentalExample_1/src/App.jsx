import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      <Greet name="Bruce" heroName="Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman" >
        <button>Action</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman" />
      <Message />
    </div>

  )
}

export default App
