import Profile from "./ProfileClass";
// import Profile from "./Profile"; 
// import { Outlet } from "react-router-dom";
import React from "react";
import UserContext from "./utils/UserContext";

// const About = () => {
//     return(
//         <>
//         <p>This is our About Page.</p>
//         <Outlet />
//         </>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent- Constructor")
    }
    componentDidMount(){
        // API calls
        // console.log("Parent-componentDidMount")
    }
    render(){
        // console.log("Parent-Render")
        return(
            <>
            <UserContext.Consumer>
                {({user}) => (
                    <h4>{user.name} - {user.email}</h4>
                )}
            </UserContext.Consumer>
           <p>This is our About Page.</p>
           <Profile name={"first-child"} />
           </>
        )
    }
}


export default About;