import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

// This presentational component will render the header

class Header extends Component {
    render() {
        return(
            <div id="header">
                <div className="header-mid">
                    <div className="header-mid-outer">
                        <div className="header-mid-inner">
                            <div className="personal-name-logo-wrap">
                                Rollin Metzger
                            </div>
                            <div className="mid-nav-wrap">
                                <Nav>
                                    <Link to="/" className="header-nav-link">Home</Link>
                                    <Link to="/about" className="header-nav-link">About</Link>
                                    <Link to="/projects" className="header-nav-link">Projects</Link>
                                    <Link to="/blog" className="header-nav-link">Blog</Link>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        )
    }
}

export default Header;