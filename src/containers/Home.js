import React, { Component } from 'react';
import oroborosEnso from '../images/oroborosEnso.png';
import Image from 'react-bootstrap/Image';
//import lodgepoleForestB from '../images/lodgepoleForestB.jpg';

class Home extends Component {

    render() {
        return(
            <div id="App-body-main">
                <div id="home-background-image-main">
                    <Image src={oroborosEnso} alt="oroboso enso" className="App-logo-spin App-logo" roundedCircle />
                    <div className="body-main-inner">
                        <div className="personal-text-container">
                            <div>
                                <h1>
                                    Rollin Metzger
                                    <br />
                                    Full-Stack Engineer
                                </h1>
                                <p>I am a driven full-stack developer with an insatiable curiosity for code</p>
                                <p>
                                    <a href="/about">About Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
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
}

export default Home;