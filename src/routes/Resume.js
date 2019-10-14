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
                <p className="resume-section-header">Education History</p>
                <p>Flatiron School</p>
                <p>+ Full-Stack Web Development</p>
                <p>University of Nebraska-Lincoln</p>
                <p>+ Bachelor's of Science: Mathematics & Philosophy</p>
            </div>
            <div className="resume-section">
                <p className="resume-section-header">TECHNICAL PROJECTS</p>
                <p>MTG Mock Drafter</p>
                <p>
                    Card drafter for Magic: The Gathering card viewing
                    + Use React to handle immediate state changes for a smooth user experience.
                    + Use Redux to handle data from asynchronous fetch actions.
                    + Utilize a Rails API for data persistence.
                    + Routes are RESTful and actions are all asynchronous.
                    + Blog post about this project.
                </p>
                <p>Two Taverns</p>
                <p>
                    Build your own Dungeons and Dragons Campaign.
                    + Utilize jQuery and AJAX to update your own campaign database.
                    + Sort, add, link anything to any quest.
                    + Organize the adventure by quests with more to come!
                    + RESTful, CRUD, DRY.
                </p>
                <p>SpellCats</p>
                <p>
                    A fun avatar creation and user interaction Rails app.
                    + Build using the Rails gem.
                    + Create your own content using SQL.
                    + Validate, authenticate, link using respective gems.
                    + RESTful routes.
                </p>
                <p>CreatU</p>
                <p>
                    Create and manage player characters and non-player characters for Dungeons and Dragons
                    + Use the Sinatra library to create and store characters.
                    + Store creations in a SQL database.
                    + CRUD resources.
                    + Validation of input to deny invalid data persistence.
                </p>
            </div>
            <div className="resume-section">
                <p className="resume-section-header">TECHNICAL SKILLS</p>
                <p>+ HTML5, CSS3, Bootstrap, SQL, Ruby, Ruby on Rails, Sinatra, Javascript, jQuery, SCSS, MVC, React, Redux</p>
            </div>
            <div className="resume-section">
                <p className="resume-section-header">EMPLOYMENT HISTORY</p>
                <p>
                    Open Harvest Cooperative Grocery, Lincoln, Nebraska
                    + Assistant Grocery Manager, June 2018 - Present
                        - Purchase for refrigerated, frozen, bulk, and grocery; maintain fluid inventory numbers with minimal waste.
                        - Managing employees' tasks and priorities; separating concerns within the department; hire and train
                        - Tracking individual budgets to meet their respective margin goals.
                    + Lead Grocery Clerk/Front End Supervisor, June 2016 - June 2018
                    + Meat & Seafood Coordinator, November 2014 - June 2016
                    + Food Service Clerk May 2009 - November 2014
                </p>
            </div>    
        </div>
    )
}

export default Resume;