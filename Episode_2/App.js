/*
    <div id="parent">
        <div id="child1">
            <h1></h1>
            <h2></h2>
        </div>
        <div id="child2">
            <h1></h1>
            <h2></h2>
        </div>
    </div>

*/
import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOMServer from "react-dom/server";

let cnt = 0;
const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { key: "child1" }, [
		React.createElement("h1", { key: `${cnt++}` }, "I am an h1 of child 1"),
		React.createElement("h2", { key: `${cnt}` }, "I am an h2 of child 1"),
	]),
	React.createElement("div", { key: "child2" }, [
		React.createElement("h1", { key: `${cnt++}` }, "I am an h1 of child 2"),
		React.createElement("h2", { key: `${cnt}` }, "I am an h2 of child 2"),
	]),
]);

//core react heading
const heading1 = React.createElement("h1", { id: "heading" }, "i am a heading");

//JSX heading ( not a react element as heading1 )
const heading2 = <h1 id="heading">I am a heading</h1>;

// babel transpiles heading2 to heading1 ( i.e in react element)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
