import { useState } from 'react';
import './App.css';
import fetchURL from './fetchURL';
import { pokemon } from './pokemon';

export default function App() {
  return (
    <>
      <div className="allCards">
        <div className="card">
          <img src={fetchURL(1)} alt={pokemon[1]} />
          <h1>{pokemon[1]}</h1>
        </div>
        <div className="card">
          <img src={fetchURL(4)} alt={pokemon[4]} />
          <h1>{pokemon[4]}</h1>
        </div>
        <div className="card">
          <img src={fetchURL(7)} alt={pokemon[7]} />
          <h1>{pokemon[7]}</h1>
        </div>
        <div className="card">
          <img src={fetchURL(25)} alt={pokemon[25]} />
          <h1>{pokemon[25]}</h1>
        </div>
        <div className="card">
          <img src={fetchURL(132)} alt={pokemon[132]} />
          <h1>{pokemon[132]}</h1>
        </div>
      </div>
    </>
  );
}

// Link selber zusammenbasteln ohne fetch und erst später mit fetch arbeiten, wenn auch behandelt in ODIN
// ein object wo id als key und name als value drin ist, und mit dieser info über den link die sprites fetchen

// async function fetchURL(id) {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id, {
//       mode: 'cors',
//     });

//     if (response.status >= 400 && response.status < 600) {
//       throw new Error('Request had an invalid Id!');
//     }

//     const {
//       sprites: { front_default },
//     } = await response.json();

//     console.log(front_default);
//     return front_default;
//   } catch (error) {
//     console.log(error);
//     alert(error);
//   }
// }

// fetchURL(1);
