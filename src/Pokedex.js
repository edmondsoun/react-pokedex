import Pokecard from './Pokecard.js';

function Pokedex({ pokemonArray }) {

    const pokedexStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    }

    return (
        <div style={pokedexStyle}>
            {pokemonArray.map(p => <Pokecard
                name={p.name}
                id={p.id}
                type={p.type}
                base_experience={p.base_experience}
            />)}
        </div>
    )

}


export default Pokedex;