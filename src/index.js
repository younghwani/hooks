import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useNotification = (title, options) => {
	if (!("Notification" in window)) {
		return;
	}
	const fireNotif = () => {
		if (Notification.permission !== "granted") {
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
};

const App = () => {
	const triggerNotif = useNotification("Can I steel your hearts?", {
		body: "I am a Student!",
	});
	return (
		<div className="App" style={{ height: "1000vh" }}>
			<button onClick={triggerNotif}>Hello</button>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
