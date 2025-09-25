import { useState, useContext } from 'react'
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
import HookCounter1 from './components/hooks/HookCounter1'
import HookCounter2 from './components/hooks/HookCounter2'
import HookCounter3 from './components/hooks/HookCounter3'
import HookCounter4 from './components/hooks/HookCounter4'
import HookCounter5 from './components/hooks/HookCounter5'
import HookCounter6 from './components/hooks/HookCounter6'
import HookCounter7 from './components/hooks/HookCounter7'
import HookCounter8 from './components/hooks/HookCounter8'
import HookCounter9 from './components/hooks/HookCounter9'
import HookCounter10 from './components/hooks/HookCounter10'
import HookCounter11 from './components/hooks/HookCounter11'
import { NameProvider } from './components/usecontexthook1/context/NameContext.jsx'

// import { ComponentB } from './components/usecontexthook1/components/ComponentB.jsx'
// import { ComponentC } from './components/usecontexthook1/components/ComponentC.jsx'
// import { ComponentD } from './components/usecontexthook1/components/ComponentD.jsx'
// import { ComponentA } from './components/usecontexthook1/components/ComponentA.jsx'

import CounterReducer1 from './components/usereducerhook1/CounterReducer1'
import CounterReducer2 from './components/usereducerhook1/CounterReducer2'
import CounterReducer3 from './components/usereducerhook1/CounterReducer3'

// import  CounterContext   from './components/usereducerhook2/CounterContext.jsx'
// import ContentProvider  from './components/usereducerhook2/CounterContext.jsx'

import ComponentA from './components/usereducerhook2/ComponentA.jsx'
import ComponentB from './components/usereducerhook2/ComponentB.jsx'
import ComponentC from './components/usereducerhook2/ComponentC.jsx'


import  ContentProvider, { CounterContext } from './components/usereducerhook2/CounterContext.jsx'
import DataFetchingTwo from './components/usereducerhook3/DataFetchingTwo.jsx'
import HookTimer from './components/hooks/HookTimer.jsx'
import DocTitleHook from './components/hooks/DocTitleHook.jsx'
import CounterOne from './components/CounterOne.jsx'
import CounterTwo from './components/CounterTwo.jsx'
import UserForm from './components/customhook/ex1/UserForm.jsx'


function AppContent() {
  // Consume context here
  const { count } = useContext(CounterContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useReducer + useContext Global Counter Example</h2>

      {/* Show counter value in App */}
      <h3>Counter in App Component: {count}</h3>

      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}


function App() {
  // const [count, setCount] = useState(0) 
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

      {/* <ParentLifeCycle /> */}

      {/* <HookCounter1 /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter5 /> */}
      {/* <HookCounter6 /> */}

      {/* 
      <HookCounter7 />
      <HookCounter8 /> 
      <HookCounter9 />
        <HookCounter10 />
      */}

      {/* <HookCounter11 /> */}


      {/* // <NameProvider>
  //     <div>
  //       <ComponentA />
  //       <ComponentB />
  //       <ComponentC />
  //       <ComponentD />

  //     </div>
  //   </NameProvider> */}

      {/* <CounterReducer1 /> */}
      {/* <CounterReducer2 /> */}
      {/* <CounterReducer3 /> */}

      {/* <ContentProvider>

        <AppContent />

      </ContentProvider> */}

        {/* <DataFetchingTwo /> */}
        {/* <HookTimer /> */}
        {/* <DocTitleHook /> */}


        {/* <CounterOne />
        <CounterTwo /> */}

        <UserForm />

    </div>
  )
}

export default App
