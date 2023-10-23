import React, { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
	console.log("훅 : ", ref, handler);
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			} else {
				handler();
			}
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.addEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);
		};
	}, [ref, handler]);
};
