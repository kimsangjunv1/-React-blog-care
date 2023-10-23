import React, { useEffect } from "react";
import { useRef } from "react";

const Item = (props) => {
	console.log("props : ", props);
	const item = useRef(null);

	useEffect(() => {
		console.log("asd", item);
	}, []);

	return (
		<div ref={item}>
			<h2>{props.item}</h2>
			<h2>{props.good}</h2>
			<img src="asd" alt="asd" />
		</div>
	);
};

export default Item;
