import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
  return (
    <nav className='nav'>
        <ul className='nav-links'>
            <li className='single-link'>
                <a href='/about'>About</a>
            </li>
            <li className='single-link'>
                <a href='/test'>Testimonials</a>
            </li>
            <li className='single-link'>
                <Link to={'/login'}>
                    <button>SIGN IN</button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
