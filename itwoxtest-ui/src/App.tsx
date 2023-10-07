import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import SignIn from './views/SignIn.js/SignIn';


function App() {
  return (
    <div className="App">
      
        <Routes>
          
        {/* <Route path="/" element={{landing page}} /> */}
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<Dashboard />} />
        </Routes>
      
    </div>
  );
}

export default App;
