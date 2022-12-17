import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import profileImg from './images/profileimg.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';




export default function Navbars() {
    const { theUser, logout } = useContext(UserContext);
    return (
        <Navbar bg="dark" variant='dark'expand="lg">
        <Container>
          <Navbar.Brand href="/">FitTrack</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {!theUser && <Nav.Link href='/login'>Login</Nav.Link>}
              {theUser && <Nav.Link onClick={logout}>Logout</Nav.Link>}
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/library">Exercise Library</NavDropdown.Item>
                <NavDropdown.Item href="/recipies">
                  Recipie Library
                </NavDropdown.Item>
                <NavDropdown.Item href='/exerciseLog'>
                    {theUser && <a href='/exerciseLog' style={{ textDecoration: 'none', color:"black" }}>Log Exercises</a>}
                </NavDropdown.Item>
                <NavDropdown.Item href='/nutrition'>
                    {theUser && <a href='/nutrition' style={{ textDecoration: 'none', color:"black" }}>Log Nutrition</a>}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    )
}



