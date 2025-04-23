import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import j3 from './assets/j3.jpg'

function App() {
  const [cards, setCards] = useState([
    { id: 1, name: 'Card 1', image: j3 },
    { id: 2, name: 'Card 2', image: j3 },
    { id: 3, name: 'Card 3', image: j3 },
    { id: 4, name: 'Card 4', image: j3 },
    { id: 5, name: 'Card 5', image: j3 },
    { id: 6, name: 'Card 6', image: j3 },
    { id: 7, name: 'Card 7', image: j3 },
    { id: 8, name: 'Card 8', image: j3 },
    { id: 9, name: 'Card 9', image: j3 },
    { id: 10, name: 'Card 10', image: j3 }
  ]);

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }

  return (
    <>
      <div className="page">
        <div className="header">
          <div className='hL'>
            <h1>Memory Cards</h1>
            <div className='subtitle'>A memory card game for The Odin Project</div>
          </div>
          <div className='hR'>
            <Header />
          </div>
        </div>
        <div className='main'>
          <h2>Game Board</h2>
          <div className='board'>
            {cards.map(card => (
              <Card key={card.id} card={card} onClick={shuffleCards} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
