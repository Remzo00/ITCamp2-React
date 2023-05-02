import React from 'react'
import './App.css';
import Header from './components/Header/header';
import Button from './components/button/button';
import Card from './components/Card';

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
    <div>
    <Button text={'Open to'} backgroudColor={'Blue'} color={'White'} />
    <Button text={'Add profile section'} />
    <Button text={'Join'} />
    <Button text={'Connect'} />
    </div>
  );
}

export default App;