import React, { Component } from "react";

class Welcome extends Component {
	render() {
		return <div>
			<h3>Class Component</h3>
			<h3>Welcome {this.props.name} a.k.a. {this.props.heroName} </h3>
		</div>;
	}
}
export default Welcome;