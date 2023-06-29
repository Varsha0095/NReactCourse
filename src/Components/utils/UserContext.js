import { createContext } from "react"

const UserContext = createContext({
    user: {
        name: "Varsha",
        email: "varsha@gmail.com",
    }
})

export default UserContext;