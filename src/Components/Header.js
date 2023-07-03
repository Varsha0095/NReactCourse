import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assests/img/foodvilla.png';
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Title = () => {
    return (
      <a href="/">
        <img
          className="h-28 p-2"
          alt="logo"
          src={Logo}
        />
      </a>
    );
  };
  
  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return (
      <div id="header" className="flex justify-between bg-amber-200 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
            <li className="px-3 text-lg"><Link to="/">Home</Link></li>
            <li className="px-3 text-lg"><Link to="/about">About Us</Link></li>
            <li className="px-3 text-lg"><Link to="/contact">Contact</Link></li>
            <li className="px-3 text-lg"><Link to="/instamart">Instamart</Link></li>
            <li className="px-3 text-lg"><Link to="/cart">Cart ({cartItems.length})</Link></li>
          </ul>
        </div>
        <span>
          {user.name} - {user.email}
        </span>
        {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      </div>
    );
  };

  export default Header;