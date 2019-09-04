import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './routes/About';
import Home from './containers/Home';
import ProjectsContainer from './containers/ProjectsContainer';
import Blog from './routes/Blog';

function App() {
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
