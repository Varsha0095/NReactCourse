import React, {useContext, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Profile from "./Components/Profile";
import Profile from "./Components/ProfileClass";
import Instamart from "./Components/Instamart";
import UserContext from "./Components/utils/UserContext";


const AppLayout = () => {
  const [user, setUser] = useState({
      name: "Varsha Prajapati",
      email: "prajapati@gmail.com"
  })
  return (
    <>
    <UserContext.Provider value={{
      user: user,
      setUser: setUser
    }}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile name={"Varsha"}/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: <Instamart />
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
