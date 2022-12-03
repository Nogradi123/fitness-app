import React from 'react';
import { createContext, useState, useEffect } from 'react';

import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [theUser, setTheUser] = useState(null);

    const getUserInfo = () => {
        axios.get("http://localhost:4200/auth/serializeuser", {withCredentials: true})
        .then((response) => {
            setTheUser(response.data)
        })
        .catch((err)=> {
            console.log(err);
        })
    }
    
    useEffect(()=>{
        getUserInfo();
    }, [])

    const logout = () =>{
        axios.post("http://localhost:4200/auth/logout",{}, {withCredentials: true})
        .then((response)=>{
        console.log(response.data)
        if(response.data.message === "successfully logged out")setTheUser(null);
        })
        .catch((err)=>{
        console.log(err);
        })
    }

    return(
        <UserContext.Provider value={{ theUser, setTheUser, getUserInfo, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
