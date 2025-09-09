import React, {Component} from "react";
import ErrorBoundary from "./ErrorBoundary";
import LifecycleDemo from "./LifecycleDemo";

// App component to mount/unmount LifecycleDemo
export default class ParentLifeCycle extends Component {
  state = { show: true };

  render() {
    return (
      <ErrorBoundary>
        <div>
          <button onClick={() => this.setState({ show: !this.state.show })}>
            {this.state.show ? "Unmount Component" : "Mount Component"}
          </button>
          {this.state.show && <LifecycleDemo />}
        </div>
      </ErrorBoundary>
    );
  }
}