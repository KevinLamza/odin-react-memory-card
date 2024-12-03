import fetchURL from './fetchURL';
import { pokemon } from './pokemon';

export function Card({ id, handleClick }) {
  return (
    <button data={id} className="card" onClick={handleClick}>
      <img src={fetchURL(id)} alt={pokemon[id]} />
      <h2>{pokemon[id]}</h2>
    </button>
  );
}
