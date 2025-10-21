import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrouserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from '.Layout';
import Home from './pages/Home'
import About from './pages/About';

export default function App(){
  return(
    <BrouserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </BrouserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
