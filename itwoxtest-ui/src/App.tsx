import React from 'react';
import {  Route, Routes } from "react-router-dom";

import './App.css';
import { DataContextProvider } from './store/DataContext';
import Dashboard from './views/Dashboard/Dashboard';
import Home from './views/LandingPage/Landing';
import SignIn from './views/SignIn.js/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
<ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    <DataContextProvider> 
        <Routes>  
        <Route path="/" element={<Home/>} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>      
        </DataContextProvider>   
    </div>
  );
}

export default App;
