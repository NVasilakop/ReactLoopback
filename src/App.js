import React from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>

    <PageWrapper>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/a" render={() => {
          return <h1>I am the /a Route</h1>
        }} />
         <Route path="/about" render={() => {
          return <h1>I am the /about Route</h1>
        }} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </PageWrapper>
    </Router>
  );
}

export default App;
