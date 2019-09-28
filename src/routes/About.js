import React from 'react';
import ImageRollin from '../components/Image-Rollin';

const About = props => {
    return(
        <div id="about-main-container">
            <div className="personal-quote-container ">
                <div>
                    <p>All that is gold does not glitter</p><br />
                    <p>Not all those who wander are lost;</p><br />
                    <p>The old that is strong does not wither,</p><br />
                    <p>Deep roots are not reached by the frost.</p><br />
                    <p>-J.R.R. Tolkien</p>
                </div>
            </div>
            <div className="about-body-inner-container about-row-1">
                <div className="about-text-top">
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
                <div className="about-text-bottom-container">
                    <div className="about-text-bottom-1">
                        <p>
                            Languages I'm currently using:<br />
                            React and Javascript<br />
                            Ruby on Rails<br />
                            SQL<br />
                        </p>
                        <p>
                            Languages I'm currently learning/wanting to learn:<br />
                            React Hooks<br />
                            Groovy/Grails and Java<br />
                            Python<br />
                            MongoDB<br />
                            Go<br />
                        </p>
                    </div>
                    <div className="about-text-bottom-2">
                        <p>
                            Projects I'm working on:<br />
                            This one! Hoisting my projects and creating a personal, home-designed, blog.<br />
                            A D&D adventure creator<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;