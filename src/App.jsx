import { useState } from 'react';
import './App.css';
import { pokemon } from './pokemon';
import { Card } from './Card';

export default function App() {
  const [sizeOfSet, setSizeOfSet] = useState(5);
  const [cardOrder, setCardOrder] = useState(firstSet(sizeOfSet));
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(e) {
    const clickedId = e.currentTarget.getAttribute('data');
    if (clickedCards.includes(clickedId)) {
      console.log('Game over');
      if (score >= highScore) {
        setHighScore(score);
      }
    } else {
      setClickedCards([...clickedCards, clickedId]);
      setScore(score + 1);
      setCardOrder(shuffleSet(cardOrder));
    }
  }

  return (
    <>
      <div className="appContainer">
        <h1>POKéMON MEMORY GAME</h1>
        <div className="allCards">
          {cardOrder.map((index) => (
            <Card key={index} id={index} handleClick={handleClick} />
          ))}
        </div>
      </div>
      <div className="scores">
        <h3>HIGH SCORE: {highScore}</h3>
        <h3>CURRENT SCORE: {score}</h3>
      </div>
    </>
  );
}

function firstSet(sizeOfSet) {
  const unshuffledIds = Object.keys(pokemon);
  const shuffledIds = shuffleSet(unshuffledIds);
  return shuffledIds.slice(0, sizeOfSet);
}

function shuffleSet(unshuffledIds) {
  const shuffledIds = unshuffledIds
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledIds;
}
