import React, { useEffect } from "react";
import { useRef } from "react";

const Item = (props) => {
	console.log("props : ", props);
	const item = useRef(null);

	useEffect(() => {
		console.log("asd", item);
	}, []);

	return (
		<div className="item" ref={item}>
			{/* <h2>{props.item}</h2> */}
			<h2 className="title">{props.title}</h2>
			<h2 className="date">{props.date}</h2>
			<img src={props.image} alt="asd" />
		</div>
	);
};

export default Item;
