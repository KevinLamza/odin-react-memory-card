import fetchURL from './fetchURL';
import { pokemon } from './pokemon';
import backSide from './assets/backside.png';

export function Card({ id, handleClick }) {
  return (
    <div className="flipCard hover">
      <div className="flipCardInner">
        <button data={id} className="cardFront" onClick={handleClick}>
          <img src={fetchURL(id)} alt={pokemon[id]} />
          <h2>{pokemon[id]}</h2>
        </button>
        <button className="cardBack">
          <img src={backSide} />
        </button>
      </div>
    </div>
  );
}
