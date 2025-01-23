import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reddy from './components/Reddy';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="menu">
        <nav>
          <ul>
            <div className='name'> 
              <h>REDDY </h>
            </div>
            
            <li>
              <Link to="/">MAIN</Link>
            </li>
            <li>
              <Link to="/home">WHO WE ARE?</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            
           
          </ul>
        </nav>
        <Routes>
          
          <Route path="/" element={<Reddy />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
