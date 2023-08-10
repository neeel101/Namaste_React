// import UserFun from "./User";
import UserClass from "./UserClass";
import React from "react";
export default class About extends React.Component{
	constructor(){
		super();
		console.log("Parent Constructor Called !");
	}
	componentDidMount() {
		console.log("Parent Component Did Mount !");
	}
	render() {
		console.log("Parent Render Called !")
		return(
			<div className="About">
				
			<h1>This is a demo About page</h1>
			{/* <UserFun name="Neelesh Vinchoorkar" dev ="Front-End Dev" location="gwalior" age={21} /> */}
			<UserClass name="Neelesh Vinchoorkar" dev ="Front-End Dev" location="gwalior" age={21} />
			
			</div>
		);
	}
}
