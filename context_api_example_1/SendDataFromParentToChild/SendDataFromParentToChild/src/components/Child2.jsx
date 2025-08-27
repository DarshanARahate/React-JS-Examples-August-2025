


export default function Child2({ sendData  }) {
    return (
        <button onClick={() => sendData("Hello from child.")} >
            Send Data to parent
        </button>
    );
}