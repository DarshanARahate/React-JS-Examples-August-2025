import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count1: 0,
            count2: 0
        }
    }

    increment = () => {
        this.setState(
            {
                count1: this.state.count1 + 1
            },
            () => {
                console.log("Callback Value", this.state.count1)
            }
        );
    };

    increment2 = () => {
        this.setState((prevState) => ({
            count2: prevState.count2 + 1
        }));
    };

    incrementByFive = () => {
        this.increment2()
        this.increment2()
        this.increment2()
        this.increment2()
        this.increment2()
    }

    render() {
        return <div>
            <h3>Count 1: {this.state.count1}</h3>
            <button onClick={ this.increment } >Increment</button>
            <h3>Count 2: { this.state.count2 }</h3>
            <button onClick={  this.incrementByFive }>Increment By Five</button>
        </div>;
    }
}
export default Counter;