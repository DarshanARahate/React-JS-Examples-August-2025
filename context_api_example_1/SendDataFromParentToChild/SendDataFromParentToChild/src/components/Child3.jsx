export default function Child3({ sendData }) {
    return <button
        onClick={() => sendData("Data from Child A")} >
        Send
    </button>
}