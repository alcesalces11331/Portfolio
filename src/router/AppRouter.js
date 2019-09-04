import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../routes/About';
import ProjectsContainer from '../containers/ProjectsContainer';
import Blog from '../routes/Blog';
import BackgroundImage from '../components/Background-Image';

function AppRouter() {
    return (
        <Router>
            <link 
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
            />

            <div className="App">
            
            <Header />

            <div id="App-body-main">
                <Route path={"/"} component={BackgroundImage} />
                <div className="body-main-inner">
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

            <Footer />
            </div>
            <Switch>
                <Route path="/blog" exact component={Blog} />
                <Route path="/projects" exact component={ProjectsContainer} />
                <Route path="/about" exact component={About} />
            </Switch>
        </Router>
    )
}

export default AppRouter;