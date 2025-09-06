import { useContext } from "react";
import { MyContext } from "../hooks/MyContext";


export default function ChildB() {
    const { message } = useContext(MyContext);

    return <h2> { message } </h2>
}