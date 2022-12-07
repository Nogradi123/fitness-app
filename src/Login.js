import React, {useContext} from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from './contexts/UserContext';

export default function Login() {
    const navigate = useNavigate();

    const { getUserInfo } = useContext(UserContext);

    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitLoginForm = () =>{
        axios.post("http://localhost:4200/auth/login", {
            username: formState.username,
            password: formState.password,
        },
        {withCredentials: true}
        )
        .then((response)=>{
            getUserInfo();
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })

    }


    return(

    <div id='loginContainer'>
        <h1 className='login'>LOGIN</h1>
        <br />
        <div>
            <input className="username" type="text" value={formState.username} onChange={(e)=>{updateInput(e, "username")}} placeholder= " Enter Username" />
        </div>
        <div>
            <input className="password" type="text" value={formState.password} onChange={(e)=>{updateInput(e, "password")}} placeholder="Enter Password"/>
            
        </div>

        <button className="signIn" onClick={submitLoginForm}>SIGN IN</button>
        <Link to={'/signup'}>
            <button className='signUp'>CREATE ACCOUNT</button>
        </Link>
    </div>
    )
}
