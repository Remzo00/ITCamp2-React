import React, { useState, useEffect } from 'react'
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './pages/header';
import axios from 'axios';

// 'https://jsonplaceholder.typicode.com/posts/1'
function App() {
  const [data, setData] = useState([])

const fetchApi = async () => {
  try{
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
  }catch(error){
    console.log("Error: ", error)
  }
}

useEffect(() => {
  fetchApi()
}, [])


  return (
   <>
   {data.map((product) => (
    <div>
      <div key={product.id}>
        <img src={product.image} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
   ))}
   {/* <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes> */}
   </>
  );
}

export default App;