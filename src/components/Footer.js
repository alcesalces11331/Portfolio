import React from 'react';

const Footer = props => {
    /* eslint-disable */
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
                        <a href="https://www.facebook.com/rollin.metzger.5" className="fa fa-facebook" alt="facebook"></a>
                        <a href="https://twitter.com/rollinmetzger" className="fa fa-twitter" alt="twitter"></a>
                        <a href="https://www.instagram.com/holdmydoommetal/" className="fa fa-instagram" alt="instagram"></a>
                        <a href="https://github.com/alcesalces11331" className="fa fa-github" alt="github"></a>
                        <a href="https://www.linkedin.com/in/rollin-metzger/" className="fa fa-linkedin" alt="linkedin"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;