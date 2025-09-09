import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Welcome2 from './components/Welcome2'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import Greet2 from './components/Greet2'
import ClassClick from './components/ClassClick'
import FunctionClick from './components/FunctionClick'
import BindingEventHandlers from './components/ BindingEventHandlers'
import MethodsAsPropsParentClassBase from './components/MethodsAsPropsParentClassBase'
import MethodsAsPropsParentFunctionalBase from './components/MethodsAsPropsParentFunctionalBase'
import ParentLifeCycle from './components/lifecycle/ParentLifeCycle'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      {/* <Greet name="Bruce" heroName="Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman" >
        <button>Action</button>
      </Greet>
      <Greet2 name="Bruce 1" heroName="Batman 1" >

      </Greet2>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome2 name="Bruce 1" heroName="Batman 1" />
      <Message />
      <Counter />

      <ClassClick />
      <FunctionClick /> */}

      {/* <BindingEventHandlers /> */}

      {/* <MethodsAsPropsParentClassBase />
      <MethodsAsPropsParentFunctionalBase /> */}

        <ParentLifeCycle />
 
    </div>

  )
}

export default App
