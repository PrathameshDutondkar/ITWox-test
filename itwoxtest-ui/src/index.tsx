import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './views/NavBar/Navbar';
import { AuthProvider } from './context/AuthContext';


ReactDOM.render(
  <Router>
      <AuthProvider>

    <Navbar />
    <App />
    </AuthProvider>

  </Router>,
  document.getElementById('root')
);

reportWebVitals();
