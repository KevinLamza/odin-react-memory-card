import { useState } from 'react';
import './App.css';
import { pokemon } from './pokemon';
import { Card } from './Card';

export default function App() {
  const usedIds = firstSet();
  const [cardOrder, setCardOrder] = useState(usedIds);

  function handleClick() {
    // stuff
  }

  return (
    <>
      <div className="appContainer">
        <h1>POKéMON MEMORY GAME</h1>
        <div className="allCards">
          <Card id={cardOrder[0]} />
          <Card id={cardOrder[1]} />
          <Card id={cardOrder[2]} />
          <Card id={cardOrder[3]} />
          <Card id={cardOrder[4]} />
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
