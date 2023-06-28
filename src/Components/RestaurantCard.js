import { IMG_CND_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-amber-100">
      <img src={IMG_CND_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{lastMileTravelString}</h5>
    </div>
  );
};

export default RestaurantCard;
