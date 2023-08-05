import { CDN_URL } from '../utils/constants';
//
const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, id } = resData?.info;

    return (
        <div  key={id}>
            <div className="card-logo">
                <img src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className="card-name heading">{name}</div>
            <div className="cuisine">{cuisines.join(', ')}</div>
            <span >{avgRating} ⭐</span>
            <span className="price">Cost: {costForTwo}</span>
        </div>
    );
};
export default RestaurantCard;