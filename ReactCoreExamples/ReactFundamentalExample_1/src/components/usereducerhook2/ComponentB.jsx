

import React, { useContext } from "react";
import { CounterContext } from '../usereducerhook2/CounterContext.jsx'

const ComponentB = () => {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Component B</h3>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ComponentB;
