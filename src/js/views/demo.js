// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";

// import { Context } from "../store/appContext";

// import "../../styles/demo.css";

// export const Demo = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container">
// 			<ul className="list-group">
// 				{store.demo.map((item, index) => {
// 					return (
// 						<li
// 							key={index}
// 							className="list-group-item d-flex justify-content-between"
// 							style={{ background: item.background }}>
// 							<Link to={"/single/" + index}>
// 								<span>Link to: {item.title}</span>
// 							</Link>
// 							{// Conditional render example
// 							// Check to see if the background is orange, if so, display the message
// 							item.background === "orange" ? (
// 								<p style={{ color: item.initial }}>
// 									Check store/flux.js scroll to the actions to see the code
// 								</p>
// 							) : null}
// 							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
// 								Change Color
// 							</button>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 			<br />
// 			<Link to="/">
// 				<button className="btn btn-primary">Back home</button>
// 			</Link>
// 		</div>
// 	);
// };
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
// second view
const Demo = () => {
	return(
		<div>
			<div className="container text-center border border-dark ">
				<div className="row border border-dark">
					<div className="col-md-4 border border-dark">
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
					className="card-img-top"
					alt="..."/>
					</div>
					<div className="col-md-8 border border-dark">
						<h1>Character name</h1>
						<p>descripcion del personaje aqui</p>
					</div>
				</div>
				</div>
				<div className="container text-center">
				<div className="row row-cols-auto text-center border border-dark">
					<p className="col p-4 m-4 border border-dark">Name:<p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Birth year:<p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>			
				</div>
				</div>
			
			
		</div>
	);
}

export default Demo;