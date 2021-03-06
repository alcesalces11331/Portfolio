import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../routes/About';
import ProjectsContainer from '../containers/ProjectsContainer';
import Blog from '../routes/Blog';
import Resume from '../routes/Resume';

import Home from '../components/Home';

function AppRouter() {
    return (
        <Router>
            <link 
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
            />
            <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <div className="App">
                <Header />
                
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/projects" exact component={ProjectsContainer} />
                    <Route path="/about" exact component={About} />
                    <Route path="/resume" exact component={Resume} />
                </Switch>
                
                <Footer />
            </div>
        </Router>
    )
}

export default AppRouter;