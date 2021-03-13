import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
	if (onConfirm && typeof onConfirm !== "function") {
		return;
	}
	if (onCancel && typeof onCancel !== "function") {
		return;
	}
	const confirmAction = () => {
		if (window.confirm(message)) {
			onConfirm();
		} else {
			onCancel();
		}
	};
	return confirmAction;
};

const App = () => {
	const deleteWorld = () => console.log("Deleting the world!!");
	const abort = () => console.log("Aborted");
	const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
	return (
		<div className="App">
			<h1>Hello</h1>
			<button onClick={confirmDelete}>Delete the world!</button>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
