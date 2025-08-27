// import { useContext } from "react";
// import { MyContext } from "./MyProvider";

// export default function Child6() {
//     const { data } = useContext(MyContext);
//     return <h2>{data}</h2>
// }

import React, { useContext } from "react";
import { MyContext } from "./MyContext";


export default function Child6() {
    const { data } = useContext(MyContext);
    return (
        <div>
            <h2>Current context value:</h2>
            <pre>{data}</pre>
        </div>
    );
}

