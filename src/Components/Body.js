import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


const filterData = (searchInput, restaurants) => {
     const filteredData = restaurants.filter((res) => res.data.name.includes(searchInput))
     return filteredData;
 }
const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button className="search-btn" onClick={() => {
                let data = filterData(searchInput, restaurants)
                setRestaurants(data);
            }}>Search</button>
        </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              name={restaurant.data.name}
              cuisines={restaurant.data.cuisines}
              cloudinaryImageId={restaurant.data.cloudinaryImageId}
              lastMileTravelString={restaurant.data.lastMileTravelString}
              key={restaurant.data.id}
            />
          );
        })}
      </div>
      </>
    );
  };

  export default Body;