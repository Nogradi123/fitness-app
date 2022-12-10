import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './contexts/UserContext';


export default function Navbar() {
    const { theUser, logout } = useContext(UserContext);
    return (
        <nav className='nav'>

            {theUser && <button className="nav-button" onClick={logout}>Logout</button>}
            <div class="dropdown">
                <button class="dropbtn">Info</button>
                <div class="dropdown-content">
                    <a href='/about'>About</a>
                    <a href='/test'>Testimonials</a>
                    <a href='/library'>Exercise Library</a>
                    <a href='#'>Recipie Guide</a>
                </div>
            </div>
            <Link to={'/login'}>
                <button className="nav-button">SIGN IN</button>
            </Link>

     
        
              
        </nav>
    )
}
