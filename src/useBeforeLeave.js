import React, { useEffect } from "react";

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

export default useBeforeLeave;