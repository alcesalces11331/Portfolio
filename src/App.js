import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './routes/About';
import ProjectsContainer from './containers/ProjectsContainer';
import Blog from './routes/Blog';
import lodgepoleForestB from './images/lodgepoleForestB.jpg';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { mobile: 600 },
  { tablet: 768 },
  { laptops: 992 },
  { desktop: 1200 }
])

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div id="App-body-main">
          <div id="home-background-image-main">
            <img src={lodgepoleForestB} alt="Wintry High Altidude Pines" />
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
        <Route path="/blog" exact component={Blog} />
        <Route path="/projects" exact component={ProjectsContainer} />
        <Route path="/about" exact component={About} />

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
