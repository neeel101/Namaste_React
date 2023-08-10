import React from "react";

export default class UserClass extends React.Component {
	constructor(props) {
		console.log("render");
		super(props);
		this.state = {
			count: 0,
		};
	}
	componentDidMount() {
		console.log("Child Component Did Mount");

	}
	render() {
		const {name, dev, location, age} = this.props;
		return (
			<>
				 <div className="user-card">
            <h1>{name}</h1>
            <h2>{dev}</h2>
            <h3>location: {location}</h3>
            <h4>age: {age}</h4>


        </div>
			</>
		);
	}
}

