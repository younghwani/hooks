import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const usePreventLeave = () => {
	const listener = (event) => {
		event.preventDefault();
		event.returnValue = "";
	};
	const enablePrevent = () =>
		window.addEventListener("beforeunload", listener);
	const disablePrevent = () =>
		window.removeEventListener("beforeunload", listener);
	return { enablePrevent, disablePrevent };
};

const App = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div className="App">
			<h1>Hello</h1>
			<button onClick={enablePrevent}>Prevent</button>
			<button onClick={disablePrevent}>Unprevent</button>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
