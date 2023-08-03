import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { WEB_URL, MOB_URL } from "../utils/constants";

const Body = () => {
	const [vpWidth, setvpWidth] = useState(window.innerWidth);
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState(
		[]
	);

	useEffect(() => {
		fetchData();
	}, []);

	const url = vpWidth <= 600 ? MOB_URL : WEB_URL;

	useEffect(() => {
		const handleResize = () => setvpWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
	}, []);

	const fetchData = async () => {
		const response = await fetch(url);
		const data = await response.json();

		url === MOB_URL
			? (setListOfRestaurants(
					data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
						?.restaurants
			  ),
			  setfilteredListOfRestaurants(
					data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
						?.restaurants
			  ))
			: (setListOfRestaurants(
					data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants
			  ),
			  setfilteredListOfRestaurants(
					data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants
			  ));
	};

	console.log(filteredListOfRestaurants);
	return filteredListOfRestaurants?.length === 0 ? (
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
						setfilteredListOfRestaurants(filteredList);
					}}
				>
					Filter above 4 rating
				</button>
				<div className="search-container">
					<input
						type="text"
						className="search-input"
						value={searchText}
						onChange={(e) => {
							const elementVal = e.target.value;
							if (elementVal === "")
								setfilteredListOfRestaurants(listOfRestaurants);

							setSearchText(elementVal);
							
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
						}}
					>
						Search
					</button>
				</div>
			</div>

			<div className="res-container">
				{filteredListOfRestaurants?.map((element) => (
					<Link
						className="card"
						to={"restaurant/" + element.info.id}
						key={element.info.id}
					>
						<RestaurantCard resData={element} />
					</Link>
				))}
			</div>
		</>
	);
};

export default Body;
