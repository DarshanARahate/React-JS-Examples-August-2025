import React, { createContext, useReducer } from "react";

// 1. Create Context
export const CounterContext = createContext();

// 2. Reducer function
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

// 3. Provider Component
export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider