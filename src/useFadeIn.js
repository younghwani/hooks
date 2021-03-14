import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
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

export default useFadeIn;