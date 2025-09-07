import { Component } from "react";



export default class BindingEventHandlers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Hello"
        }

        // Method 3: Binding in constructor
        this.handleClick3 = this.handleClick3.bind(this)
    }

    // Method 1: Binding in render (not recommended for performance)
    handleClick1() {
        this.setState({ message: "Binding in render (not recommended for performance)" });
    }

    // Method 2: Using arrow function in render
    handleClick2() {
        this.setState({ message: "Using arrow function in render" });
    }

    // Method 3: Binding in constructor
    handleClick3() {
        this.setState({ message: "Binding in constructor" });
    }

    // Method 4: Defining handler as arrow function (auto binds this)
    handleClick4 = () => {
        this.setState({ message: "Defining handler as arrow function (auto binds this)" })
    }

    render() {
        return (
            <div>
                <h4>{this.state.message} </h4>
                {/* Method 1 Binding in render */}
                <button onClick={this.handleClick1.bind(this)}>
                    Click 1
                </button>


                {/* Method 2: Arrrow function in render */}
                <button onClick={() => this.handleClick2()}>
                    Click 2
                </button>


                {/* Method 1 Binding in Constructor */}
                <button onClick={this.handleClick3}>
                    Click 3
                </button>


                {/* Method 1 Arrow function class Property */}
                <button onClick={this.handleClick4}>
                    Click 4
                </button>

            </div>
        );
    }
}