import { Component } from "react";


export default class MethodsAsPropsChildClassBase extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.greetHandler("Child")} >
                    Greet parent
                </button>
            </div>
        );
    }
}

