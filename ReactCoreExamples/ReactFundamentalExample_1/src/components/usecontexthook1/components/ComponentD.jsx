import React, { useContext, useState } from "react";
import { NameContext } from "../context/NameContext";

export const ComponentD = () => {
  const { name, setName } = useContext(NameContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>Component D</h3>
      <input
        type="text"
        placeholder="Enter name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setName(inputValue)}>Set Name</button>
      <p>Shared Name: {name}</p>
    </div>
  );
}; 
