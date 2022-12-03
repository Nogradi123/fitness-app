import React, {useContext} from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './contexts/UserContext';

export default function SignUp() {
    const navigate = useNavigate();

    const { getUserInfo } = useContext(UserContext);

    const [formState, setFormState] = useState({
        username: "",
        password: "",
        email: "",
        userWeight: "",
        userHeight: ""
    });

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitSignupForm = () =>{
        axios.post("http://localhost:4200/auth/signup", {
            username: formState.username,
            password: formState.password,
            email: formState.email,
            userWeight: formState.userWeight,
            userHeight: formState.userHeight
        },
        {withCredentials: true}
        )
        .then((response)=>{
            getUserInfo();
            navigate('/login')
        })
        .catch((err)=>{
            console.log(err);
        })

    }


    return(

    <div>
        <br />
        <div>
            <input type="text" value={formState.username} onChange={(e)=>{updateInput(e, "username")}} placeholder= " Enter Username" />
        </div>
        <div>
            <input type="text" value={formState.password} onChange={(e)=>{updateInput(e, "password")}} placeholder="Enter Password"/>
        </div>
        <div>
            <input type="text" value={formState.email} onChange={(e)=>{updateInput(e, "email")}} placeholder="Enter email"/>
        </div>
        <div>
            <input type="text" value={formState.userWeight} onChange={(e)=>{updateInput(e, "userWeight")}} placeholder="Enter Weight"/>
        </div>
        <div>
            <input type="text" value={formState.userHeight} onChange={(e)=>{updateInput(e, "userHeight")}} placeholder="Enter Height"/>
        </div>
        <button onClick={submitSignupForm}>Submit</button>
    </div>
    )
}
