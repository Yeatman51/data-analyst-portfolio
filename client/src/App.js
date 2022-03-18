import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Wrapper from "./components/Wrapper.js";
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App background-img">
      

      <Header/>

      <Router>
      <Navbar/>
      <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/About" component={About} />  
          <Route exact path="/Contact" component={Contact} />  
      </Wrapper>
      </Router>

      <Footer/>
      

      
    </div>
  );
}

export default App;
