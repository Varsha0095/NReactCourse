import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
    //    const timer = setInterval(() => {
    //         console.log("Hey Varsha")
    //     },1000)
    console.log("UseEffect")

        return() => {
            // clearInterval(timer)
            console.log("useEffect Return")
        }
    },[])
    console.log("render")

    return(
        <div>
            <h2>Profile Component</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count+1)}>Increment Count</button>
        </div>
    )
}

export default Profile;