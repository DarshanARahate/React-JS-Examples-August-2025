import { useState } from 'react'
import './App.css'
import Child1 from "./components/Child";
import Child2 from "./components/Child2";
import Parent1 from './components/Patent1';
import Child5 from './components/Child5';
import Child6 from './components/Child6';
import { MyProvider } from './components/MyContext';

function App() {
  const [count, setCount] = useState(0);
  const message = "Hello from Parent!";
  const [msg, setMsg] = useState("");


  const handleData = (data) => {
    setMsg(data);
  };

  return (

    // <>

    // </>

    <MyProvider>
      <div  > 
        <Child5 />
        <Child6 />

        <Parent1 />
        <Child1 data={message} />
        <Child2 sendData={handleData} />
        <p> Message from Child: {msg} </p>
      </div>
    </MyProvider>

  );
}

export default App
