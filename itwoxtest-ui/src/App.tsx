import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import LandingPage from './views/LandingPage.js/landingPage';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<Dashboard />} />
        </Routes>
      
    </div>
  );
}

export default App;
