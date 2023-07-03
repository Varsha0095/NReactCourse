import { IMG_CND_URL } from "../config";

const FoodItem = ({
  name,
  description,
  cloudinaryImageId,
  price
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-amber-100 border-2 border-amber-200">
      <img src={IMG_CND_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg">{name}</h3>
      <h5 className="text-lg">Rupees- {price}</h5>
      <h6>{description}</h6>
    </div>
  );
};

export default FoodItem;
