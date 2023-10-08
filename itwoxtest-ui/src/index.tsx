import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './views/NavBar/Navbar';

ReactDOM.render(
  <Router>
    <Navbar />
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
