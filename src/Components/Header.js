import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assests/img/foodvilla.png';
import { useContext } from "react";
import UserContext from "./utils/UserContext";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import useOnline from "./utils/useOnline";

const Title = () => {
    return (
      <a href="/">
        <img
          data-testid="logo"
          className="h-28 p-2"
          alt="logo"
          src={Logo}
        />
      </a>
    );
  };
  
  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return (
      <div id="header" className="flex justify-between bg-amber-200 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
          <Link to="/"><li className="px-3 text-lg">Home</li></Link>
          <Link to="/about"><li className="px-3 text-lg">About Us</li></Link>
          <Link to="/contact"><li className="px-3 text-lg">Contact</li></Link>
          <Link to="/instamart"><li className="px-3 text-lg">Instamart</li></Link>
            <Link to="/cart"><li data-testid="cart" className="px-3 text-lg">Cart ({cartItems.length})</li></Link>
          </ul>
        </div>
        <div>
          <h1 data-testid="online-status">{isOnline? "Online✅" : "Offline🔴"}</h1>
        </div>
        <span>
          {user.name} - {user.email}
        </span>
        {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      </div>
    );
  };

  export default Header;