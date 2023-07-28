import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
// let originalArray =  [];
const Body = () => {
	console.log("render#");
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [filteredListOfRestraunts, setfilteredListOfRestaurants] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.201920390147787&lng=78.14587969332933&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const data = await response.json();
		// console.log(
		// 	data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
		// );
		setListOfRestaurants(
			data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		console.log("da");
		setfilteredListOfRestaurants(
			data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	return filteredListOfRestraunts.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="feature-container">
				<button
					className="filter"
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(element) => element.info.avgRating >= 4
						);
						setListOfRestaurants(filteredList);
					}}>
					Filter above 4 rating
				</button>
				<div className="search-container">
					<input
						type="text"
						className="search-input"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
							// console.log(e.target.value);
						}}
					/>
					<button
						className="search-btn"
						onClick={() => {
							const newList = listOfRestaurants.filter((res) =>
								res.info.name.toUpperCase().includes(searchText.toUpperCase())
							);

							newList.length === 0
								? (setfilteredListOfRestaurants(listOfRestaurants),
								  alert("cant find!"))
								: setfilteredListOfRestaurants(newList);
						}}>
						Search
					</button>
				</div>
			</div>

			<div className="res-container">
				{filteredListOfRestraunts.map((element) => (
					<RestaurantCard key={element.info.id} resData={element} />
				))}
			</div>
		</>
	);
};

export default Body;
