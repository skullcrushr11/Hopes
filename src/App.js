
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home.js';

import AboutUs from './components/AboutUs.js';
import './App.css';


function App() {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
 
        
      </Routes>
    </Router>
  );
}

export default App;
