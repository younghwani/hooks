import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useFadein = (duration = 1, delay = 0) => {
	const element = useRef();
	console.log(element);
	useEffect(() => {
		if (
			element.current &&
			(typeof duration === "number" || typeof delay === "number")
		) {
			const { current } = element;
			current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
			current.style.opacity = 1;
		}
	}, []);
	return { ref: element, style: { opacity: 0 } };
};

const App = () => {
	const fadeInH1 = useFadein(1, 2);
	const fadeInP = useFadein(5, 10);
	return (
		<div className="App">
			<h1 {...fadeInH1}>Hello</h1>
			<p {...fadeInP}>lorem ipsum lalalala</p>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
