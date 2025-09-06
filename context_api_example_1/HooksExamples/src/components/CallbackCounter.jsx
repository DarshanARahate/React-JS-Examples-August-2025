import { useCallback } from "react";
import { useState } from "react";

export default function CallbackCounter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");


    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={increment}>Increament</button>
            Text : {text}
            <br /><br />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                placeholder="Type Here" />
        </div>
    );
}

