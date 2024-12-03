import fetchURL from './fetchURL';
import { pokemon } from './pokemon';

export function Card({ id }) {
  return (
    <div className="card">
      <img src={fetchURL(id)} alt={pokemon[id]} />
      <h2>{pokemon[id]}</h2>
    </div>
  );
}
