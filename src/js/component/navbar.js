import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/Star-wars-logo.png";

export const Navbar = (item, category, index) => {
  const { store, actions } = useContext(Context);

  const deleteFavorite = (itemName) => {
    let newfavorites = store.favorites.filter(item => item.name != itemName)
	actions.deleteFavorites(newfavorites)
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <p>
          <img className="ms-5" height="70px" src={starWarsLogo} />
        </p>
      </Link>
      <div className="ml-auto">
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle me-3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
            <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
				<h5>Characters</h5>
              {store.favorites.filter((item)=>item.category=="people").map((item) => {
                return (
                  <div>
					<Link to={"/single/"+item.category+"/"+item.index}>{item.name}</Link>
                    
                    <button className="btn btn-outline-link text-dark border border-none">
                      <i
                        className="fa-sharp fa-solid fa-trash"
                        onClick={() => {
                          deleteFavorite(item.name, item.category);
                        }}
                      />
                    </button>
                  </div>
                );
              })}
            </li>
            <li className="dropdown-item">
				<h5>Planets</h5>
              {store.favorites.filter((item)=>item.category=="planets").map((item) => {
                return (
					<div>
					<Link to={"/single/"+item.category+"/"+item.index}>{item.name}</Link>
                    
                    <button className="btn btn-outline-link text-dark border border-none">
                      <i
                        className="fa-sharp fa-solid fa-trash"
                        onClick={() => {
                          deleteFavorite(item.name, item.category);
                        }}
                      />
                    </button>
                  </div>
                );
              })}
            </li>
            <li className="dropdown-item">
				<h5>Vehicles</h5>
              {store.favorites.filter((item)=>item.category=="vehicles").map((item) => {
                return (
					<div>
					<Link to={"/single/"+item.category+"/"+item.index}>{item.name}</Link>
                    
                    <button className="btn btn-outline-link text-dark border border-none">
                      <i
                        className="fa-sharp fa-solid fa-trash"
                        onClick={() => {
                          deleteFavorite(item.name, item.category);
                        }}
                      />
                    </button>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
