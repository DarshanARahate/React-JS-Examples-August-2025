


function FunctionClick() {

    function clickHandler() {
       alert("Hello! This is an alert message.");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )

}

export default FunctionClick;