import { IMG_CND_URL } from "../config";
import { useContext } from "react";
import UserContext from "./utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-amber-100 border-2 border-amber-200">
      <img src={IMG_CND_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{lastMileTravelString}</h5>
      <h6>{user.name} - {user.email}</h6>
    </div>
  );
};

export default RestaurantCard;
