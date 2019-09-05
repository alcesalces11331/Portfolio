import React from 'react';
import Image from 'react-bootstrap/Image';
import lodgepoleForestB from '../images/lodgepoleForestB.jpg';

const About = props => {
    return(
        <div id="App-body-main">
            <div id="about-background-image-main">
                <Image src={lodgepoleForestB} alt="wintry pines" img-responsive="true" />
            </div>
            <div className="body-main-inner">
                <div className="personal-quote-container">
                    <div>
                        <p>All that is gold does not glitter</p><br />
                        <p>Not all those who wandder are lost;</p><br />
                        <p>The old that is strong does not wither,</p><br />
                        <p>Deep roots are not reached by the frost.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;