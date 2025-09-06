import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateExample from './hooks/UseStateExample'
import UseEffectExample1 from './hooks/UseEffectExample1'
import UseEffectExample2 from './hooks/UseEffectExample2'
import { MyProvider } from './hooks/MyContext'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'
import TodoApp from './components/ToDoApp'
import Counter from './hooks/ReducerExample'
import CallbackCounter from './components/CallbackCounter'
import CallbackCounter2 from './components/CallbackCounter2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseStateExample /> */}
      {/* <UseEffectExample1 /> */}
      {/* <UseEffectExample2 /> */}

      {/* <MyProvider>
        <div>
          <h1>useContext Example</h1>
          <ChildA />
          <ChildB />
        </div>
      </MyProvider> */}

      {/* <Counter /> */}
      {/* <TodoApp /> */}

      {/* <CallbackCounter /> */}

      <CallbackCounter2 />

    </>
  )
}

export default App
