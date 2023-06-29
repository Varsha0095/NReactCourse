import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { IMG_CND_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
    const { id } = useParams();

    const restaurant = useRestaurant(id);

    return (!restaurant) ? <Shimmer /> : (
        <div>
           <div className="p-2 m-2">
           <h1>Restaurant id: {id}</h1>
            <h3 className="font-bold text-xl">{restaurant?.cards[0]?.card?.card?.info?.name}</h3>
            <img className="border-2 border-amber-200 p-2 m-2 bg-amber-50" src={IMG_CND_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
            <h4>Area: {restaurant?.cards[0]?.card?.card?.info?.areaName}</h4>
            <h4>City: {restaurant?.cards[0]?.card?.card?.info?.city}</h4>
            <h4>Cost For Two: {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
           </div>
           {/* <div>
            <h1>Menu</h1>
            {console.log(restaurant?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards)}
            <ul>{(restaurant?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards).map((item) => 
            <li key={item.id}>{item?.card?.card?.itemCards[1]?.card?.info?.name}</li>)}</ul>
           </div> */}
        </div>
    )
}

export default RestaurantMenu;