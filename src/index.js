import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useBeforeLeave = (onBefore) => {
	const handle = (event) => {
		const { clientY } = event;
		if (clientY <= 0 && typeof onBefore === "function") {
			onBefore();
		}
	};
	useEffect(() => {
		if (typeof onBefore === "function") {
			document.addEventListener("mouseleave", handle);
			return () => document.removeEventListener("mouseleave", handle);
		}
	}, []);
};

const App = () => {
	const begForLife = () => console.log("pls dont leave");
	useBeforeLeave(begForLife);
	return (
		<div className="App">
			<h1>Hello</h1>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
