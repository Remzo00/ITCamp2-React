import React, { useState, useEffect } from 'react'
import './App.css';
import Parent from './props/parent';
import { Button } from '@mui/material';
import axios from 'axios';
import SearchBar from './components/search';
import ReactQuery from './query';
// 'https://jsonplaceholder.typicode.com/posts/1'
function App() {
  // const [products, setProducts] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products');
  //     const data = response.data;
  //     setProducts(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData()
  // })

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };

  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <ReactQuery />
    // <div>
    //   <SearchBar handleSearch={handleSearch} />

    //   {filteredProducts.map((product) => (
    //     <div key={product.id}>
    //       <h3>{product.title}</h3>
    //     </div>
    //   ))}
    // </div>
  );
}

export default App;