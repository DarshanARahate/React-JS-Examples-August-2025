import { createContext, useState } from "react";

// export const MyContext = createContext();

// export function MyProvider({ children }) {
//     const [data, setData ] = useState("Hello from Context");

//     return (
//         <MyContext.Provider value={{ data, setData }}>
//             { children }
//         </MyContext.Provider>
//     )
// }

export const MyContext = createContext();


export function MyProvider({ children }) {
    const [data, setData] = useState("Hello from Context");
    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
}