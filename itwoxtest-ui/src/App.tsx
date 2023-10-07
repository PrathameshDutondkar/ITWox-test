import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import LandingPage from './views/LandingPage.js/landingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LandingPage />} />
          <Route path="/dashboard" element={<LandingPage />} />


          <Route path="/aboutus" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
