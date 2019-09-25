import React from 'react';
import ImageRollin from '../components/Image-Rollin';

const About = props => {
    return(
        <div id="about-main-container">
            <div className="personal-quote-container ">
                <div>
                    <p>All that is gold does not glitter</p>
                    <p>Not all those who wander are lost;</p>
                    <p>The old that is strong does not wither,</p>
                    <p>Deep roots are not reached by the frost.</p>
                </div>
            </div>
            <div className="about-body-inner-container about-row-1">
                <div className="about-text">
                    <p>
                        Hello! I am Rollin and welcome to my personal portfolio site. I am full-stack developer by trade but a huge nerd by choice. I play in and run a campaign for D&D. I love literature and omnivorously read across genres. I enjoy video games, walks, and hanging out with my two cats, Mufasa and The Weeg. 
                    </p>
                    <p>
                        As you may have been able to tell from this site, whenever possible, I try to practice minimalism. I enjoy designing and programming clean aesthetics and intuitive UI choices.
                        I'm constantly learning more and more languages and better, new, ways to innovate my own code. 
                    </p>
                </div>
                <div className="personal-image-container">
                    <ImageRollin />
                </div>
                <div className="about-text">
                    <p>
                        Languages I'm currently using:
                        <ul>
                            <li>React and Javascript</li>
                            <li>Ruby on Rails</li>
                            <li>SQL</li>
                        </ul>
                    </p>
                    <p>
                        Languages I'm currently learning/wanting to learn:
                        <ul>
                            <li>React Hooks</li>
                            <li>Groovy/Grails and Java</li>
                            <li>Python</li>
                            <li>MongoDB</li>
                            <li>Go</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;