import { useState } from "react";
import Child3 from "./Child3";
import Child4 from "./Child4";




export default function Parent1() {
    const [data, setData] = useState("");

    return (
        <>
            <Child3 sendData={setData} />
            <Child4 data={data} />
        </>
    );
}