// imports necessary components for the script to function
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Registration from './components/views/Registration/Registration';
import Home from './components/views/HomePage/Home';
import Program from './components/views/Program/Program';
import Events from './components/views/Events/Events';
import About from './components/views/About/About';
import Login from './components/views/Login/Login';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    // Creates a router to route to the appropriate pages
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/programs' component={Program}/>
        <Route path='/events' component={Events}/>
        <Route path='/about' component={About}/>
        <Route path='/registration' component={Registration}/>
        <Route path='/login' component={Login}/>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
