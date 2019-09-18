import React from 'react';

const Footer = props => {
    return(
        <div id="footer-main-container">
            <div className="footer-inner-container">
                <div className="info-personal-container">
                    <div className="info-personal">
                        <p>Rollin Metzger</p>
                        <p>rollin.metzger@gmail.com</p>
                    </div>
                </div>
                <div className="social-media-link-container">
                    <div className="social-media-link">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;