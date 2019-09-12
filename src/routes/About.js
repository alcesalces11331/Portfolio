import React from 'react';
import BackgroundImage from '../components/Background-Image';

const About = props => {
    return(
        <div id="App-body-main">
            <div className="about-main-inner">
                <div className="personal-quote-container">
                    <div>
                        <p>All that is gold does not glitter</p>
                        <p>Not all those who wandder are lost;</p>
                        <p>The old that is strong does not wither,</p>
                        <p>Deep roots are not reached by the frost.</p>
                    </div>
                </div>
            </div>
            <div id="about-background-image-main">
                <BackgroundImage />
            </div> 
        </div>
    )
}

export default About;