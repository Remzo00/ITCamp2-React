import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/header';
import Button from './components/button/button';
import Card from './components/Card';
import Counter from './state/counter';
import Text from './state/Text';
import Login from './state/dropdown';
import Dropdown from './state/dropdown';

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
 <Counter />
   <Text />
   <Dropdown />
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