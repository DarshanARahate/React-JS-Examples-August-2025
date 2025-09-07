import { Component } from "react";


class ClassClick extends Component {
    clickHandler() {
        alert("Hello! This is an alert message.");
    }


    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >Click Me</button>
            </div>
        )
    }
}

export default ClassClick;




