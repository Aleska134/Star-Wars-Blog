const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		vehicles: [],
		planets: [],
		favorites: [],
	  },
	  actions: {
		loadData: () => {
		  const store = getStore();
		  fetch("https://swapi.dev/api/people/")
			.then((res) => res.json())
			.then((data) => setStore({ people: data.results }))
			.catch((err) => console.error(err));
  
		  fetch("https://swapi.dev/api/vehicles/")
			.then((res) => res.json())
			.then((data) => setStore({ vehicles: data.results }))
			.catch((err) => console.error(err));
  
		  fetch("https://swapi.dev/api/planets/")
			.then((res) => res.json())
			.then((data) => setStore({ planets: data.results }))
			.catch((err) => console.error(err));
		},
		addFavorites: (item, category,index) => {
		  console.log(item);
		  let store = getStore();
		  item["category"] = category;
		  item["index"] = index;
		  store.favorites.push(item);
		  setStore(store);
		},
		deleteFavorites:(newfavorites) =>{
		  setStore({favorites: newfavorites});
		}
	  },
	};
  };
  
  export default getState;
  