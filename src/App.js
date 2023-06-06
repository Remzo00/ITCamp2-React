import React, { useState, useEffect } from 'react'
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './pages/header';
import axios from 'axios';
import Parent from './props/parent';

// 'https://jsonplaceholder.typicode.com/posts/1'
function App() {
  return (
   <>
    <Parent />
   </>
  );
}

export default App;