import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useClick = (onClick) => {
	const element = useRef();
	useEffect(() => {
		//componentDidMount()
		if (element.current && typeof onClick === "function") {
			element.current.addEventListener("click", onClick);
		}
		//componentWillUnmount()
		return () => {
			if (element.current && typeof onClick === "function") {
				element.current.removeEventListener("click", onClick);
			}
		};
	}, []); //dependencyList를 통해 componentDidUpdate()일 경우 호출 안함.
	return element;
};

const App = () => {
	const sayHello = () => console.log("say hello!");
	const title = useClick(sayHello);
	return (
		<div className="App">
			<h1 ref={title}>Hello</h1>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
