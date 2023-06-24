import { useEffect, useState } from "react";
// import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const filterData = (searchInput, restaurants) => {
     const filteredData = restaurants.filter((res) => res.data.name.toLowerCase().includes(searchInput.toLowerCase()))
     return filteredData;
 }
const Body = () => {
    // creating two copies of restaurants one for the whole UI other for the filtered UI
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    

    useEffect(() => {
     //API Call
     getRestaurants();
    }, [])

    async function getRestaurants(){
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3068925&lng=75.5793361&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    //Conditional Rendering
    // if restaurants has no data or its length is 0 => render Shimmer UI
    // if restaurants has data => render the normal UI


    //avoid rendering a component (Early return)
    if(!allRestaurants) return null;

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button className="search-btn" onClick={() => {
                let data = filterData(searchInput, allRestaurants)
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
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