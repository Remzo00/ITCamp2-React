import React from 'react'
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './pages/header';

function App() {
  return (
   <>
   <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
   </>
  );
}

export default App;