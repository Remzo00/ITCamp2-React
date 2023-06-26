import React, { useState, useEffect } from 'react'
import './App.css';
import Parent from './props/parent';
import { Button } from '@mui/material';
import axios from 'axios';
import SearchBar from './components/search';
import ReactQuery from './query';
function App() {
  return (
    <ReactQuery />
  );
}

export default App;