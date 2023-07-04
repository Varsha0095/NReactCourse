import { useEffect, useState } from "react";
// import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";

const Body = () => {
  // creating two copies of restaurants one for the whole UI other for the filtered UI
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3068925&lng=75.5793361&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //using custom hook for offline msg
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴Uh-Oh!! Please Check Your Internet Connection...❗❗</h1>;
  }

  //Conditional Rendering
  // if restaurants has no data or its length is 0 => render Shimmer UI
  // if restaurants has data => render the normal UI

  //avoid rendering a component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex p-2 m-2 bg-gray-200 shadow-xl">
        <input
          data-testid="search-input"
          type="text"
          className="placeholder:text-slate-400 block bg-white w-4/5 border border-slate-300 rounded-md p-3 m-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          placeholder="🔍   Search for anything..."
          name="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="text-lg font-semibold border-2 bg-zinc-400 rounded-md p-3 m-2 w-36 shadow-sm focus:outline-none hover:bg-amber-200 text-neutral-700"
          onClick={() => {
            let data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard
                name={restaurant.data.name}
                cuisines={restaurant.data.cuisines}
                cloudinaryImageId={restaurant.data.cloudinaryImageId}
                lastMileTravelString={restaurant.data.lastMileTravelString}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
