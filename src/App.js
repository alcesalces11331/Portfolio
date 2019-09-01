import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './routes/About';
import ProjectsContainer from './containers/ProjectsContainer';
import Blog from './routes/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <body id="App-body-main">
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
        </body>
        <Route path="/blog" exact component={Blog} />
        <Route path="/projects" exact component={ProjectsContainer} />
        <Route path="/about" exact component={About} />

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
