import Pokedex from './Pokedex.js';

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    // simultaneously swaps i and j.. don't need a temp value!
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

function Pokegame({ pokemonArray }) {

  const shuffled = shuffle(pokemonArray);
  const handOne = shuffled.slice(0, 4);
  const handTwo = shuffled.slice(4);

  const handOneExp = handOne.reduce((prev, curr) => prev + curr.base_experience, 0);
  const handTwoExp = handTwo.reduce((prev, curr) => prev + curr.base_experience, 0);

  const winner = handOneExp > handTwoExp;

  return (
    <div>
      <Pokedex pokemonArray={handOne} totalExp={handOneExp} isWinner={winner}/>
      <Pokedex pokemonArray={handTwo} totalExp={handTwoExp} isWinner={!winner}/>
    </div>
  );
}

export default Pokegame;