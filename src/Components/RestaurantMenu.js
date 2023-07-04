import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CND_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="p-2 m-2">
        <h1>Restaurant id: {id}</h1>
        <h3 className="font-bold text-xl">
          {restaurant?.cards[0]?.card?.card?.info?.name}
        </h3>
        <img
          className="border-2 border-amber-200 p-2 m-2 bg-amber-50"
          src={
            IMG_CND_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h4>Area: {restaurant?.cards[0]?.card?.card?.info?.areaName}</h4>
        <h4>City: {restaurant?.cards[0]?.card?.card?.info?.city}</h4>
        <h4>
          Cost For Two:{" "}
          {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h4>
      </div>
      <div className="m-10">
        <h1 className="p-2 m-2 font-bold text-3xl">Menu</h1>
        {/* {console.log(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.title)} */}
        <ul data-testid="menu">
          {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
            (itemCard) => (
              <li key={itemCard?.card?.info?.id}>
                {itemCard?.card?.info?.name} -{" "}
                <button data-testid="addBtn"
                  className="bg-amber-300 font-semibold p-1 m-3 w-44 border-4 rounded-lg border-amber-100"
                  onClick={() => handleCart(itemCard?.card?.info?.name)}
                >
                  Add
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
