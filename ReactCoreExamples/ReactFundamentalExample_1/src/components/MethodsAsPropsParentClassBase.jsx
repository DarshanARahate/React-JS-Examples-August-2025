import { Component } from "react";
import MethodsAsPropsChildClassBase from './MethodsAsPropsChildClassBase';

export default class MethodsAsPropsParentClassBase extends Component {

    greetParent(name) {
        alert(`Hello from ${name} to Parent`)
    }

    render() {
        return (
            <div>
                <h4>
                    Class Base Example
                </h4>
                <MethodsAsPropsChildClassBase greetHandler={this.greetParent} />
            </div>
        )
    }
}

 