import React from 'react'
import './App.css';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header title="Naslov" />
      <Header title="Nesto drugo" />
      <Header title="test" />
    </div>
  );
}

export default App;
