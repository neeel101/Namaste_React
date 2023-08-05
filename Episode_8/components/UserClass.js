import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super();
        this.a = 6;
    }


	 render() {
        const {name, location, dev, age} = this.props;

		return <div className="user-card">
            <h1>{name}</h1>
            <h2>{dev}</h2>
            <h3>location: {location}</h3>
            <h4>age: {age}</h4>
        </div>;
	}
}
export default UserClass;
