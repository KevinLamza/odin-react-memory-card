import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="card">
      <img src={fetchURL(4)} alt="Charmander" />
      <h1>Charmander</h1>
    </div>
  );
}

// Link selber zusammenbasteln ohne fetch und erst später mit fetch arbeiten, wenn auch behandelt in ODIN

async function fetchURL(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id, {
      mode: 'cors',
    });

    if (response.status >= 400 && response.status < 600) {
      throw new Error('Request had an invalid Id!');
    }

    const {
      sprites: { front_default },
    } = await response.json();

    console.log(front_default);
    return front_default;
  } catch (error) {
    console.log(error);
    alert(error);
  }
}
