import { useEffect, useState } from "react";


export default function UseEffectExample1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component rendered count: ", count);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );


}
