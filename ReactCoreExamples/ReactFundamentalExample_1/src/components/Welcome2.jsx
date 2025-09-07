import React, { Component } from "react";

class Welcome2 extends Component {
	render() {
        // Destructuring
        const {name, heroName} = this.props;
        // const { state1, state2} = this.name;

		return <div>
			<h3>Class Component</h3>
			<h3>Welcome {name} a.k.a. {heroName} </h3>
		</div>;
	}
}
export default Welcome2;