import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { DataContextProvider } from './store/DataContext';
import Dashboard from './views/Dashboard/Dashboard';
import Home from './views/LandingPage/Landing';
import SignIn from './views/SignIn.js/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './errorboundary/ErrorBoundary';

function App() {
  return (
    <div className="App" data-testid="app-component">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
      <DataContextProvider>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </ErrorBoundary>
      </DataContextProvider>
    </div>
  );
}

export default App;
