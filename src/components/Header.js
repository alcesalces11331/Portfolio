import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

// This presentational component will render the header

class Header extends Component {

    renderMediumDown = () => {
        return(
            <Breakpoint medium down>

            </Breakpoint>
        )
    }

    renderMediumUp = () => {
        return(
            <Breakpoint medium up>  
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
            </Breakpoint>
        )
    }

    render() {
        return(
            <div id="header">
                {this.renderMediumUp()}
            
            </div>
        )
    }
}

export default Header;