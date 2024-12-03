import { useState } from 'react';
import './App.css';
import { pokemon } from './pokemon';
import { Card } from './Card';

export default function App() {
  const usedIds = firstSet();
  const [cardOrder, setCardOrder] = useState(usedIds);

  function handleClick() {
    setCardOrder(shuffleSet(cardOrder));
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
    </>
  );
}

function firstSet() {
  const unshuffledIds = Object.keys(pokemon);
  const shuffledIds = shuffleSet(unshuffledIds);
  return shuffledIds.slice(0, 5);
}

function shuffleSet(unshuffledIds) {
  const shuffledIds = unshuffledIds
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledIds;
}
