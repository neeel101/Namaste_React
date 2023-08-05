import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_MOB_URL, RES_MENU_WEB_URL } from "../utils/constants";
import bullet from '../images/res-menu-bullet.png'
const RestaurantMenu = () => {
	console.log("#render");
	const { resId } = useParams();
	useEffect(() => {
		Fetch();
	}, []);
	const [ResMenu, setResMenu] = useState(null);
	const url = window.innerWidth <= 480 ? RES_MENU_MOB_URL : RES_MENU_WEB_URL;
	const Fetch = async () => {
		const response = await fetch(
			(url + `restaurantId=${resId}&submitAction=ENTER`)
		);
		const data = await response.json();

		console.log(data);
		setResMenu(data);

	};
	if (ResMenu === null) return <Shimmer />;
	const {
		name,
		cuisines,
		areaName,
		costForTwo,
		avgRating,
		totalRatingsString,
	} = ResMenu?.data?.cards[0]?.card?.card?.info;
	const { slaString, lastMileTravelString } =
		ResMenu?.data.cards[0]?.card?.card?.info.sla;
		console.log(slaString, lastMileTravelString);
		let j = 0;
		for(j; j < ResMenu?.data?.cards.length;j++) {
			if(ResMenu?.data?.cards[j]?.groupedCard)
			 break;
		}

	let i = 0;
	for (i; i < ResMenu?.data?.cards[j]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length; i++) {
		if (ResMenu?.data.cards[j].groupedCard.cardGroupMap.REGULAR.cards[i].card
			?.card?.itemCards) break;
	}
	const itemCards =
		ResMenu?.data?.cards[j]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card
			?.card?.itemCards;

	console.log(ResMenu);

	return (
		<div className="Restaurant-menu">
			<div className="info-card">
				<div className="info">
					<h1>{name}</h1>
					<h2>{areaName}</h2>
					<span>{cuisines.join(", ")}</span>,<span>{lastMileTravelString}</span>
				</div>
				<div className="rating">
					<span>{avgRating} ⭐</span>
					<hr />
					<span>{totalRatingsString}</span>
				</div>
			</div>
			<hr />

			<div className="sla-cost">
				<svg
					class="RestaurantTimeCost_icon__8UdT4"
					width="18"
					height="18"
					viewBox="0 0 18 18"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
				>
					<circle
						r="8.35"
						transform="matrix(-1 0 0 1 9 9)"
						stroke="#3E4152"
						strokeWidth="1.3"
					></circle>
					<path
						d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
						fill="#3E4152"
					></path>
				</svg>
				<span>{slaString}</span>
				<span> ₹{costForTwo / 10} for Two</span>
			</div>
			<hr />
			<div className="menu-card">
				<ul>
					{itemCards?.map((item) => (
						<li key={resId}>{item?.card?.info?.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
