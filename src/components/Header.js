import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {

    renderMediumDown = () => {
        return(
            <Navbar expand='md'>
                <div className="header-med-down">
                    <div className="header-down-outer">
                        <div className="header-down-inner row">
                            <div className="down-name-logo col-">
                                RM
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        )
    }
/*
    renderMediumUp = () => {
        return(
            <div className="header-med-up">
                <div className="header-up-outer">
                    <div className="header-up-inner row">
                        <div className="up-name-logo col-">
                            Rollin Metzger
                        </div>
                        <div className="mid-nav-wrap">
                            <Nav>
                                <Link to="/" className="header-nav-link">Home</Link>
                                <Link to="/about" className="header-nav-link">About</Link>
                                <Link to="/projects" className="header-nav-link">Projects</Link>
                                <Link to="/blog" className="header-nav-link">Blog</Link>
                                <Link to="/resume" className="header-nav-link">Resume</Link>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
*/
    render() {
        return(
            <Navbar id="header" expand='md'>
                <div className="header-main-container">
                    <Navbar.Brand href="/">Rollin Metzger</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>   
            </Navbar>         
        )
    }
}

export default Header;