import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export function MyProvider({ children }) {
    const [message, setMessage] = useState("Hello from context");

    return <MyContext.Provider value={{ message, setMessage }}>
        {children}
    </MyContext.Provider>
}







