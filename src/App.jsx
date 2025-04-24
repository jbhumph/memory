import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import wizard from './assets/wizard.jpg'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState(0)
  const apiKey = import.meta.env.VITE_API_KEY;
  

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=wizard&limit=10`);
        const gifUrls = response.data.data.map(gif => gif.images.original.url);
        setCards(prevCards =>
          prevCards.map((card, index) => ({
            ...card,
            image: gifUrls[index % gifUrls.length],
          }))
        );
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
  };

    fetchGifs();
  }, []); 
  
  const [cards, setCards] = useState([
    { id: 1, name: 'Card 1', image: wizard, clicked: false },
    { id: 2, name: 'Card 2', image: wizard, clicked: false },
    { id: 3, name: 'Card 3', image: wizard, clicked: false },
    { id: 4, name: 'Card 4', image: wizard, clicked: false },
    { id: 5, name: 'Card 5', image: wizard, clicked: false },
    { id: 6, name: 'Card 6', image: wizard, clicked: false },
    { id: 7, name: 'Card 7', image: wizard, clicked: false },
    { id: 8, name: 'Card 8', image: wizard, clicked: false },
    { id: 9, name: 'Card 9', image: wizard, clicked: false },
    { id: 10, name: 'Card 10', image: wizard, clicked: false }
  ]);

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }

  const newcount = () => {
    setCount(count + 1);
  }
  const newClicks = () => {
    setClicks(clicks + 1);
  }

  const clickHandler = (card) => {
    newClicks();
    if (card.clicked == false) {
      newcount();
      card.clicked = true;
    }
    shuffleCards();
  }

  return (
    <>
      <div className="page">
        <div className="header">
          <div className='hL'>
            <h1>Memory Card Wizard</h1>
            <div className='subtitle'>A memory card game - click a wizard but never click the same one twice. They're a tricky sort...</div>
            <div className='subtitle'>Click a card to start!</div>
          </div>
          <div className='hR'>
            <Header count={count} clicks={clicks} />
          </div>
        </div>
        <div className='main'>
          <div className='board'>
            {cards.map(card => (
              <Card key={card.id} card={card} onClick={clickHandler} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
