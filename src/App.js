import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './routes/About';
import Home from './containers/Home';
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
        
        <Home />

        <Route path="/blog" exact component={Blog} />
        <Route path="/projects" exact component={ProjectsContainer} />
        <Route path="/about" exact component={About} />

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
