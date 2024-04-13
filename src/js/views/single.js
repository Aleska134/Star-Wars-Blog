import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let character = store[params.category].find(
    (item, index) => index == params.theid
  );
  
  let imageBaseUrl;

	switch (params.category) {
		case "people":
		imageBaseUrl =
			"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/";
		break;
		case "planets":
		imageBaseUrl =
			"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/";
		break;
		default:
		imageBaseUrl =
			"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/";
		break;
		}

		const imgLink = `${imageBaseUrl}${parseInt(params.theid) + 1}.jpg`;
		const fallbackImgLink = "https://qph.cf2.quoracdn.net/main-qimg-25822c155f1c07ce501bd75443059e06-lq"; // Replace with your actual fallback image URL
	
		const handleImageError = (event) => {
		event.target.src = fallbackImgLink;
		};
  
  return (
    <div className="jumbotron">
      {/* {params.category=="people"?(html):params.category=="planets"?(otro html):(otro html)} */}
      {params.category == "people" && (
        <>
        <hr className="my-4 border border-dark" />
      <div>
        <div className="container text-center border border-dark ">
          <div className="row border border-dark">
            <div className="col-md-4 border border-dark">
            <img
            src={imgLink}
			className="card-img-top"
            onError={handleImageError}
          />
            </div>
            <div className="col-md-8 border border-dark">
              <h1>Name:{' '} {character?.name} </h1>
              <p>Description: </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque augue diam, venenatis eget neque a, placerat
                blandit enim. Ut quis odio quam. Suspendisse rhoncus est risus,
                ut feugiat mauris ullamcorper vulputate. Nullam elementum tempus
                ipsum ut dignissim. Aliquam orci nisi, ullamcorper id mollis at,
                tempor ut risus. Nullam accumsan, quam non scelerisque viverra,
                eros arcu scelerisque nisi, quis consectetur lorem libero sed
                sem. Proin lacus sapien, consectetur ac ullamcorper ac, commodo
                quis leo.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container-md">
          <div className="row row-cols-auto text-center border border-dark">
            <p className="col p-4 m-4-dark">Name:{" "}{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</p>
            <p className="col p-4 m-4-dark">Birth year:{" "}{character.birth_year}</p>
            <p className="col p-4 m-4-dark">Gender: {" "}{character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}</p>
            <p className="col p-4 m-4-dark">Height: {" "}{character.height}</p>
            <p className="col p-4 m-4-dark">Eye color:{" "}{character.eye_color.charAt(0).toUpperCase()+character.eye_color.slice(1)} </p>
            <p className="col p-4 m-4-dark">Mass: {" "}{character.mass}</p>			
            <p className="col p-4 m-4-dark">Skin color:{" "}{character.skin_color.charAt(0).toUpperCase()+character.skin_color.slice(1)} </p>
          </div>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg m-3" href="#" role="button">
          Back home
        </span>
      </Link>
      </>
      )}


      {params.category == "planets" &&(
        <>
      <hr className="my-4 border border-dark" />
      <div>
        <div className="container text-center border border-dark ">
          <div className="row border border-dark">
            <div className="col-md-4 border border-dark">
            <img
            src={imgLink}
			      className="card-img-top"
            onError={handleImageError}
          />
            </div>
            <div className="col-md-8 border border-dark">
              <h1>Name:{' '} {character?.name} </h1>
              <p>Description: </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque augue diam, venenatis eget neque a, placerat
                blandit enim. Ut quis odio quam. Suspendisse rhoncus est risus,
                ut feugiat mauris ullamcorper vulputate. Nullam elementum tempus
                ipsum ut dignissim. Aliquam orci nisi, ullamcorper id mollis at,
                tempor ut risus. Nullam accumsan, quam non scelerisque viverra,
                eros arcu scelerisque nisi, quis consectetur lorem libero sed
                sem. Proin lacus sapien, consectetur ac ullamcorper ac, commodo
                quis leo.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row row-cols-auto text-center border border-dark">
            <p className="col p-4 m-4-dark">Name:{" "}{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</p>
            <p className="col p-4 m-4-dark">Diameter:{" "}{character.diameter}</p>
            <p className="col p-4 m-4-dark">climate:{" "} {character.climate.charAt(0).toUpperCase() + character.climate.slice(1)}</p>
            <p className="col p-4 m-4-dark">Population:{" "} {character.population}</p>
            <p className="col p-4 m-4-dark">Terrain:{" "}{character.terrain.charAt(0).toUpperCase()+character.terrain.slice(1)} </p>		
          </div>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg m-3" href="#" role="button">
          Back home
        </span>
      </Link> 
    </>  
    )}


      {params.category == "vehicles" &&(
        <>
      <hr className="my-4 border border-dark" />
      <div>
        <div className="container text-center border border-dark ">
          <div className="row border border-dark">
            <div className="col-md-4 border border-dark">
            <img
            src={imgLink}
			className="card-img-top"
            onError={handleImageError}
          />
            </div>
            <div className="col-md-8 border border-dark">
              <h1>Name:{' '} {character?.name} </h1>
              <p>Description: </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque augue diam, venenatis eget neque a, placerat
                blandit enim. Ut quis odio quam. Suspendisse rhoncus est risus,
                ut feugiat mauris ullamcorper vulputate. Nullam elementum tempus
                ipsum ut dignissim. Aliquam orci nisi, ullamcorper id mollis at,
                tempor ut risus. Nullam accumsan, quam non scelerisque viverra,
                eros arcu scelerisque nisi, quis consectetur lorem libero sed
                sem. Proin lacus sapien, consectetur ac ullamcorper ac, commodo
                quis leo.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row row-cols-auto text-center border border-dark">
            <p className="col p-4 m-4-dark">Name:{" "}{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</p>
            <p className="col p-4 m-4-dark">Max atmosphering speed:{" "}{character.max_atmosphering_speed}</p>
            <p className="col p-4 m-4-dark">Model:{" "} {character.model.charAt(0).toUpperCase() + character.model.slice(1)}</p>
            <p className="col p-4 m-4-dark">Passengers:{" "} {character.passengers}</p>
            <p className="col p-4 m-4-dark">Vehicle class:{" "}{character.vehicle_class.charAt(0).toUpperCase()+character.vehicle_class.slice(1)} </p>		
          </div>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg m-3" href="#" role="button">
          Back home
        </span>
      </Link>  
        </>
      )}
    </div>
    
     
  );
};