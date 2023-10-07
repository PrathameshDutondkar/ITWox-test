import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import { DataContextProvider } from './store/DataContext';
import Dashboard from './views/Dashboard/Dashboard';
import SignIn from './views/SignIn.js/SignIn';


function App() {
  return (
    <div className="App">
    <DataContextProvider> 
        <Routes>  
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>      
        </DataContextProvider>   
    </div>
  );
}

export default App;
