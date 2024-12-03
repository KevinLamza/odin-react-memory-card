import { useState } from 'react';
import './App.css';
import fetchURL from './fetchURL';
import { pokemon } from './pokemon';
import { Card } from './Card';

export default function App() {
  const unshuffledIds = Object.keys(pokemon);
  const shuffledIds = unshuffledIds
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  const usedIds = shuffledIds.slice(0, 5);

  return (
    <>
      <div className="appContainer">
        <h1>POKéMON MEMORY GAME</h1>
        <div className="allCards">
          <Card id={usedIds[0]} />
          <Card id={usedIds[1]} />
          <Card id={usedIds[2]} />
          <Card id={usedIds[3]} />
          <Card id={usedIds[4]} />
        </div>
      </div>
    </>
  );
}
