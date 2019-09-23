import React from 'react';
import ImageRollin from '../components/Image-Rollin';

const About = props => {
    return(
        <div id="about-main-container">
            <div className="about-body-inner-container about-row-1">
                <div className="personal-quote-container ">
                    <div>
                        <p>All that is gold does not glitter</p>
                        <p>Not all those who wandder are lost;</p>
                        <p>The old that is strong does not wither,</p>
                        <p>Deep roots are not reached by the frost.</p>
                    </div>
                </div>
                <div className="personal-image-container">
                    <ImageRollin />
                </div>
            </div>
        </div>
    )
}

export default About;