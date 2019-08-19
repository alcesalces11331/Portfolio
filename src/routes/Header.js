import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

// This presentational component will render only the navbar links

const Header = props => {
    return(
        <Navbar sticky="top">
            <Nav>
                <Link to="/">Home</Link>||
                <Link to="/about">About</Link>||
                <Link to="/projects">Projects</Link>||
                <Link to="/blog">Blog</Link>
            </Nav>
        </Navbar>
    )
}

export default Header;