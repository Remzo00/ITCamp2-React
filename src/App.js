import React, { useState } from 'react'
import './App.css';
import Login from './state/login';

const cardData = [
  {
    id: 1,
    image: 'https://example.com/image1.jpg',
    title: 'Card 1',
    description: 'This is the first card.',
  },
  {
    id: 2,
    image: 'https://example.com/image2.jpg',
    title: 'Card 2',
    description: 'This is the second card.',
  },
  {
    id: 3,
    image: 'https://example.com/image3.jpg',
    title: 'Card 3',
    description: 'This is the third card.',
  },
];

function App() {
  return (
    <div>
   <Login />
    </div>
  
    // <div className="App">
    //  {cardData.map((card) => (
    //   <Card
    //     key={card.id}
    //     image={card.image}
    //     title={card.title}
    //     description={card.description}
    //   />
    //  ))}
    // </div>
    
  );
}

export default App;