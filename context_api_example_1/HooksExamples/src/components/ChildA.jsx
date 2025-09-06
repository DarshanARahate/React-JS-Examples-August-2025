import { useContext } from "react";
import { MyContext } from "../hooks/MyContext";


export default function ChildA() {
    const { setMessage } = useContext(MyContext);

    return (<button onClick={() => setMessage("Updated by ChildA")}>Click Me!</button>);
}



