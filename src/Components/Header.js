const Title = () => {
    return (
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
        />
      </a>
    );
  };
  
  const Header = () => {
    return (
      <div id="header" className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;