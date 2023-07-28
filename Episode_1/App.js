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
console.log(parent);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
