import React from 'react';

const Resume = props => {
    return(
        <div className="resume-body-main">
            <div className="resume-header">
                <p id="resume-title">Rollin R. Metzger</p>
                <p className="resume-p-text">
                    I am a driven, goal-oriented programmer with a keen eye for problem-solving. I place equal importance on front-end user experience
                    and back-end data management. To this end, I am a persistent programmer who realizes it takes out-of-the-box thinking and passion to
                    keep updated with ongoing development. I enjoy analyzing rising trends for the user's experience because I believe it is necessary to
                    provide immaculate client service. I program in HTML5/CSS3, SQL, Ruby, Rails, Javascript, JQuery, React and Redux. I'm constantly
                    devouring new languages to deepen my ability and flexibility. I always prioritize RESTful routing, MVC project design,. I'm a team player,
                    cooperative, amiable. Outside of programming, I love to play Dungeons & Dragons, both as a player and as a dungeon master.
                </p>
            </div>
            <div className="resume-section">
                <p className="resume-section-header">EDUCATION HISTORY</p>
                <p className="resume-section-sep">Flatiron School</p>
                <p>+ Full-Stack Web Development</p>
                <p className="resume-section-sep">University of Nebraska-Lincoln</p>
                <p>+ Bachelor's of Science: Mathematics & Philosophy</p>
            </div>
            <div className="resume-section">
                <p className="resume-section-header">TECHNICAL PROJECTS</p>
                <div className="tech-section-container">
                    <p className="resume-section-sep">MTG Mock Drafter</p>
                    <p>
                        Card drafter for Magic: The Gathering card viewing<br />
                        + Use React to handle immediate state changes for a smooth user experience.<br />
                        + Use Redux to handle data from asynchronous fetch actions.<br />
                        + Utilize a Rails API for data persistence.<br />
                        + Routes are RESTful and actions are all asynchronous.<br />
                        + Blog post about this project.
                    </p>
                </div>
                
                <div className="tech-section-container">
                    <p className="resume-section-sep">Two Taverns</p>
                    <p>
                        Build your own Dungeons and Dragons Campaign. <br />
                        + Utilize jQuery and AJAX to update your own campaign database.<br />
                        + Sort, add, link anything to any quest.<br />
                        + Organize the adventure by quests with more to come!<br />
                        + RESTful, CRUD, DRY.<br />
                    </p>
                </div>
                
                <div className="tech-section-container">
                    <p className="resume-section-sep">SpellCats</p>
                    <p>
                        A fun avatar creation and user interaction Rails app.<br />
                        + Build using the Rails gem.<br />
                        + Create your own content using SQL.<br />
                        + Validate, authenticate, link using respective gems.<br />
                        + RESTful routes.<br />
                    </p>
                </div>
                
                <div className="tech-section-container">
                    <p className="resume-section-sep">CreatU</p>
                    <p>
                        Create and manage player characters and non-player characters for Dungeons and Dragons<br />
                        + Use the Sinatra library to create and store characters.<br />
                        + Store creations in a SQL database.<br />
                        + CRUD resources.<br />
                        + Validation of input to deny invalid data persistence.<br />
                    </p>
                </div>
                
            </div>
            <div className="resume-section">
                <p className="resume-section-header">TECHNICAL SKILLS</p>
                <p>+ HTML5, CSS3, Bootstrap, SQL, Ruby, Ruby on Rails, Sinatra, Javascript, jQuery, SCSS, MVC, React, Redux</p>
            </div>
            <div className="resume-section">
                <p className="resume-section-header">EMPLOYMENT HISTORY</p>
                <p>
                    <strong>Open Harvest Cooperative Grocery, Lincoln, Nebraska</strong><br />
                    + Assistant Grocery Manager, June 2018 - Present<br />
                        - Purchase for refrigerated, frozen, bulk, and grocery; maintain fluid inventory numbers with minimal waste.<br />
                        - Managing employees' tasks and priorities; separating concerns within the department; hire and train<br />
                        - Tracking individual budgets to meet their respective margin goals.<br />
                    + Lead Grocery Clerk/Front End Supervisor, June 2016 - June 2018<br />
                    + Meat & Seafood Coordinator, November 2014 - June 2016<br />
                    + Food Service Clerk May 2009 - November 2014
                </p>
            </div>    
        </div>
    )
}

export default Resume;