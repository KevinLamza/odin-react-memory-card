export default function fetchURL(id) {
  return (
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/' +
    id +
    '.png'
  );
}
