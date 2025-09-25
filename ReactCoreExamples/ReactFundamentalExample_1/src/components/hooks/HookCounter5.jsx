import { useEffect, useState } from "react"

export default function HookCounter5() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You click ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>

        </div>
    )
}

