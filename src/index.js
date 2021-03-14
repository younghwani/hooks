import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import useFullscreen from "./useFullscreen";

const App = () => {
	const onFullS = (isFull) => {
		console.log(isFull ? "We are full" : "We are small");
	};
	const { element, triggerFull, exitFull, fullCheck } = useFullscreen(
		onFullS
	);
	return (
		<div className="App" style={{ height: "1000vh" }} ref={element}>
			<img src="https://lh3.googleusercontent.com/proxy/QINlJByxnBo0hQz4j9eKCCzNOkgKlC51o2aBgmNHrngs0VnoeQwP3H5DNRRI7maEAc69bwN_K1XW_wTUnEgZRiU4pdUVoo45f7C8i3rxzopUIoJmRsXFzi-ddP1M8ZM3BQNF1n4TfFkKuXIVt5E7xg6dfyAAHnYfpFdjb7VfFmRhO8n1lAolpj6RVO-fHV6f03beVrgChkcuShKaXYOZfC4HTBPTtRStszTpaPF3MEslbjdFI7MLPrZMhuWq2qH-pm3-EOTjytW_nfzyhsiCjlf3r0xzuTaRbAMe9ulHPMteg5_qVOFeNtmqbULkWCINXnnJuLwgWF9dY18OJ0G-MLfJemab6667GVEDyaah_Uom"></img>
			<br></br>
			<button onClick={exitFull} disabled={!fullCheck}>
				Exit fullscreen
			</button>
			<button onClick={triggerFull}>Make fullscreen</button>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
