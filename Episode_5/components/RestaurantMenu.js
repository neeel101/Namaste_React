import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
	console.log("#render");
	const { resId } = useParams();
	useEffect(() => {
		Fetch();
	}, []);
	const [ResMenu, setResMenu] = useState(null);
	const Fetch = async () => {
		const response = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.201920390147787&lng=78.14587969332933&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
		);
		const data = await response.json();

		// console.log(data);
		setResMenu(data);
	};
	if (ResMenu === null) return <Shimmer />;
	const { name, cuisines, areaName, costForTwo } =
		ResMenu?.data.cards[0]?.card?.card?.info;

	const itemCards =
		ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
			?.card?.itemCards ||
		ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card?.itemCards;

	console.log(
		ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card.itemCards
	);

	return (
		<div className="Restaurant-menu">
			<h1>{name}</h1>
			<h2>{areaName}</h2>
			<h3>{cuisines.join(", ")}</h3>
			<h4>costForTwo: {costForTwo / 10}</h4>
			<ul>
				{itemCards?.map((item) => (
					<li key={resId}>{item?.card?.info?.name}</li>
				))}
			</ul>
		</div>
	);
};

console.log("useState- ", useState);
export default RestaurantMenu;
