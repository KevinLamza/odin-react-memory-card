import { useState } from 'react';
import './App.css';
import { pokemon } from './pokemon';
import { Card } from './Card';

export default function App() {
  const smallestSetSize = 5;
  const [gameActive, setGameActive] = useState(false);
  const [sizeOfSet, setSizeOfSet] = useState(smallestSetSize);
  const [cardOrder, setCardOrder] = useState(newSet(sizeOfSet));
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(e) {
    const clickedId = e.currentTarget.getAttribute('data');
    if (clickedCards.includes(clickedId)) {
      loseRound();
    } else if (clickedCards.length + 1 === sizeOfSet) {
      winRound();
    } else {
      setClickedCards([...clickedCards, clickedId]);
      setScore(score + 1);
      setCardOrder(shuffleSet(cardOrder));
    }
  }

  function loseRound() {
    console.log('Game over');
    if (score >= highScore) {
      setHighScore(score);
    }
    restartGame();
  }

  function winRound() {
    console.log('You won the round!');
    newRound(sizeOfSet + 1);
    setScore(score + 1);
  }

  function newRound(size) {
    setSizeOfSet(size);
    setCardOrder(newSet(sizeOfSet + 1));
    setClickedCards([]);
  }

  function restartGame(size = 5) {
    setSizeOfSet(size);
    setCardOrder(newSet(size));
    setClickedCards([]);
    setScore(0);
  }

  function AllCards() {
    return (
      <div className="allCards">
        {cardOrder.map((index) => (
          <Card key={index} id={index} handleClick={handleClick} />
        ))}
      </div>
    );
  }

  function ChooseDifficulty({ handleChooseDifficulty }) {
    return (
      <>
        <h2>Choose the difficulty:</h2>
        <div className="difficultySelection">
          <button
            data="easy"
            className="difficulty"
            onClick={handleChooseDifficulty}
          >
            Easy
          </button>
          <button
            data="medium"
            className="difficulty"
            onClick={handleChooseDifficulty}
          >
            Medium
          </button>
          <button
            data="hard"
            className="difficulty"
            onClick={handleChooseDifficulty}
          >
            Hard
          </button>
          <button
            data="einstein"
            className="difficulty"
            onClick={handleChooseDifficulty}
          >
            Albert Einstein
          </button>
        </div>
      </>
    );
  }

  function handleChooseDifficulty(e) {
    const difficulty = e.currentTarget.getAttribute('data');
    setGameActive(true);
    if (difficulty === 'easy') restartGame(5);
    else if (difficulty === 'medium') restartGame(10);
    else if (difficulty === 'hard') restartGame(15);
    else if (difficulty === 'einstein') restartGame(20);
  }

  return (
    <>
      <div className="appContainer">
        <h1>POKéMON MEMORY GAME</h1>
        {gameActive ? (
          <AllCards />
        ) : (
          <ChooseDifficulty handleChooseDifficulty={handleChooseDifficulty} />
        )}
      </div>
      <div className="scores">
        <h3>HIGH SCORE: {highScore}</h3>
        <h3>CURRENT SCORE: {score}</h3>
      </div>
    </>
  );
}

function newSet(sizeOfSet) {
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
