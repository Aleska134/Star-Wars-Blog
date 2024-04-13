import React, { useContext, useEffect }from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../component/card";
import Card from "../component/card";


const Home = () => {
	const {store, actions} = useContext(Context);
	return(
	<div>
		<div className="container-sm p-2 ms-4">
			<h2>Characters</h2>
				<div className = "mt-4 d-flex flex-wrap gap-5 overflow-y-auto ">
					{store.people.map((item, index) => {
						return(<Card key={index} category="people" item={item} index ={index}/>		)
					})}
							
				</div>
		</div>	
					
		<div className="container-sm p-2 ms-4 my-5">
			<h2>Planets</h2>	
				<div className = "mt-4 d-flex flex-wrap gap-5 overflow-y-auto">
				{store.planets.map((item, index) => {
						return(<Card key={index} category="planets" item={item} index ={index}/>		)
					})}		
				</div>
		</div>

		<div className="container-sm p-2 ms-4 my-5">
			<h2>Vehicles</h2>	
				<div className = "mt-4 d-flex flex-wrap gap-5 overflow-y-auto">			
				{store.vehicles.map((item, index) => {
						return(<Card key={index} category="vehicles" item={item} index ={index}/>		)
					})}				
				</div>
		</div>

	</div>

);
				};
export default Home;