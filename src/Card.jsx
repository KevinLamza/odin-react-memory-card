import fetchURL from './fetchURL';
import { pokemon } from './pokemon';

export function Card({ id, handleClick }) {
  return (
    <div className="flipCard">
      <div className="flipCard-inner">
        <button data={id} className="cardFront" onClick={handleClick}>
          <img src={fetchURL(id)} alt={pokemon[id]} />
          <h2>{pokemon[id]}</h2>
        </button>
        <button className="cardBack"></button>
      </div>
    </div>
  );
}
