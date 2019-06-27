import jsUI from "./js-ui";
import React from "react";
import ReactDOM from "react-dom";
const { div, button } = jsUI(React.createElement);

console.log(div("foo"));
ReactDOM.render(
  div([button("Click Me").onClick(() => console.log("hell yes"))]),
  document.querySelector("#root")
);
