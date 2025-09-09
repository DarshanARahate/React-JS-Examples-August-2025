import React , {Component} from "react";


// ErrorBoundary to demonstrate error handling lifecycle
export default class ErrorBoundary extends  Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    console.log("ErrorBoundary: constructor");
  }

  static getDerivedStateFromError(error) {
    console.log("ErrorBoundary: getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary: componentDidCatch", error, info);
  }

  render() {
    console.log("ErrorBoundary: render");
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }
    return this.props.children;
  }
}