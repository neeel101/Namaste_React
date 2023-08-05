import UserFun from "./User";
import UserClass from "./UserClass";
export default function About() {
	return (
		<div className="About">
			<h1>This is a demo About page</h1>
			<UserFun name="Neelesh Vinchoorkar" dev ="Front-End Dev" location="gwalior" age={21} />
			<UserClass name="Neelesh Vinchoorkar" dev ="Front-End Dev" location="gwalior" age={21} />
		</div>
	);
}
