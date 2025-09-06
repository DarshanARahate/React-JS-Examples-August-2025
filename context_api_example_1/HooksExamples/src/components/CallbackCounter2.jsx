import React, { useState, useCallback } from "react";


const Button = React.memo(({ onClick }) => {
    console.log("Child rerendered")
    return <button onClick={onClick} >Increment</button>
});

export default function CallbackCounter2() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");



    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            <Button onClick={increment} />

            <br />
            <input type="text" value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type Here" />
        </div>
    );
}






