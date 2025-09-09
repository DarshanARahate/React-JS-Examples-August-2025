import React , {Component} from "react";

export default class LifecycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("1. constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("2. getDerivedStateFromProps");
        return null; // No state update
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("3. shouldComponentUpdate");
        return true; // Allow update
    }

    render() {
        console.log("4. render");
        if (this.state.count === 5) {
            // Force an error at count=5 to trigger error handling lifecycle
            throw new Error("Crashed at count=5!");
        }
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }

    componentDidMount() {
        console.log("5. componentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("6. getSnapshotBeforeUpdate");
        return null; // must return value (snapshot) or null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("7. componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("8. componentWillUnmount");
    }
}