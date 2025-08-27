// import { MyContext } from "./MyProvider";
import { useContext } from "react";
import { MyContext } from "./MyContext";


// export default function Child5() {
//     const { sendData } = useContext(MyContext);

//     return <button onClick={
//         () => sendData("Updated by ChildA")}
//     >
//         Update
//     </button>
// }


export default function Child5() {
    const { setData } = useContext(MyContext);
    return (
        <div style={{ marginBottom: 12 }}>
            <button onClick={() => setData("Updated by ChildA")}>Update</button>
            <button
                onClick={() => setData("Hello from Context")}
                style={{ marginLeft: 8 }}
            >
                Reset
            </button>
        </div>
    );
}