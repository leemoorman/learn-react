import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Home from './pages/Home'
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hi Lee</h1>
    <h2>Hello World!</h2>
    <Home />
    <About />
  </React.StrictMode>
);
