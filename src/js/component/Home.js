import React, { useState } from "react";

//create your first component
const Home = () => {

	const [selectedColor, setSelecterColor] = useState("red");
	let color = ["red", "yellow", "green"];

	return (

		<div className="container d-flex align-item-center justify-content-center flex-column text-center mt-5">
			<div className="stick justify-content-center"></div>
			<div className="semaphore">
				<div
					onClick={() => setSelecterColor("red")}
					className={"redLight" + (selectedColor === "red" ? " glow" : "")}></div>
				<div
					onClick={() => setSelecterColor("yellow")}
					className={"yellowLight" + (selectedColor === "yellow" ? " glow" : "")}></div>
				<div
					onClick={() => setSelecterColor("green")}
					className={"greenLight" + (selectedColor === "green" ? " glow" : "")}></div>
			</div>
			<button
				onClick={() => {
					let colorIndex = Math.floor(Math.random() * color.length);
					setSelecterColor(color[colorIndex])}}
				className="btn btn-outline-secondary btn-sm mt-5">Random Color!</button>
		</div >
	);
};

export default Home;
