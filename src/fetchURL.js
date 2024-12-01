async function fetchURL() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1025`);

    if (response.status >= 400 && response.status < 600) {
      throw new Error('Request had an invalid Id!');
    }

    const {
      sprites: { front_default },
    } = await response.json();

    console.log(front_default);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}
fetchURL();
