import React from 'react';
import BackgroundImage from '../components/Background-Image';

const Home = props => {
    return(
        <div id="App-body-main">
            <BackgroundImage />
            <div className="body-main-inner-fullName">
                <div className="personal-text-container">
                    <div>
                        <h1>
                            Rollin Metzger
                            <br />
                            Full-Stack Engineer
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;