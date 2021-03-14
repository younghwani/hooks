import React, { useEffect, useRef } from "react";

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

export default useClick;
