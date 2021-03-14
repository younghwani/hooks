import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useFullscreen = (callback) => {
	const [fullCheck, setFullCheck] = useState(false);
	const element = useRef();
	const runCb = (isFull) => {
		if (callback && typeof callback === "function") {
			callback(isFull);
		}
	};
	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullScreen) {
				element.current.mozRequestFullScreen();
			} else if (element.current.webkitRequestFullscreen) {
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				element.current.msRequestFullscreen();
			}
			runCb(true);
			setFullCheck(true);
		}
	};
	const exitFull = () => {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		runCb(false);
		setFullCheck(false);
	};
	return { element, triggerFull, exitFull, fullCheck };
};

const App = () => {
	const onFullS = (isFull) => {
		console.log(isFull ? "We are full" : "We are small");
	};
	const { element, triggerFull, exitFull, fullCheck } = useFullscreen(onFullS);
	return (
		<div className="App" style={{ height: "1000vh" }}>
			<div ref={element}>
				<img src="https://lh3.googleusercontent.com/proxy/QINlJByxnBo0hQz4j9eKCCzNOkgKlC51o2aBgmNHrngs0VnoeQwP3H5DNRRI7maEAc69bwN_K1XW_wTUnEgZRiU4pdUVoo45f7C8i3rxzopUIoJmRsXFzi-ddP1M8ZM3BQNF1n4TfFkKuXIVt5E7xg6dfyAAHnYfpFdjb7VfFmRhO8n1lAolpj6RVO-fHV6f03beVrgChkcuShKaXYOZfC4HTBPTtRStszTpaPF3MEslbjdFI7MLPrZMhuWq2qH-pm3-EOTjytW_nfzyhsiCjlf3r0xzuTaRbAMe9ulHPMteg5_qVOFeNtmqbULkWCINXnnJuLwgWF9dY18OJ0G-MLfJemab6667GVEDyaah_Uom"></img>
				<br></br>
				<button onClick={exitFull} disabled={!fullCheck}>Exit fullscreen</button>
			</div>
			<button onClick={triggerFull}>Make fullscreen</button>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
