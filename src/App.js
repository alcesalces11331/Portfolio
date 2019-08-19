import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './routes/Header';
import Footer from './routes/Footer';
import About from './routes/About';
import Projects from './routes/Projects';
import Blog from './routes/Blog';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Route path="/blog" exact component={Blog} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
