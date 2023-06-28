import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        //create states
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Dummy location",
                avatar_url: "Dummy Url"
            }
        }
        console.log("Child-Constructor" + this.props.name)
    }
    async componentDidMount(){
        // API calls
        const data = await fetch("https://api.github.com/users/Varsha0095");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        console.log("Child-componentDidMount - it is called after the first or initial render" + this.props.name)
    }

    componentDidUpdate(){
         this.timer = setInterval(() => {
            console.log("Hello Varsha")
        },1000)
        console.log("componentDidUpdate - It's is called after every next render")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("componentWillUnmount- It's called when we changes the component")
    }

    render(){
        console.log("Child-Render" + this.props.name)
        return(
            <div>
                <img src={this.state.userInfo.avatar_url} />
            <h1>This is Profile Class Component.</h1>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2>
            {/* DO NOT MUTATE THE STATE DIRECTLY AS this.state = SOMETHING, NEVER DO IT */}
            </div>
        )
    }
}

export default Profile;