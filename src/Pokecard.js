const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({id,name,type,base_experience}) {

    const pokeStyle = {
        padding: '10px',
        margin: '10px',
        width: '200px',
        backgroundColor: 'grey',
        borderRadius: '5px',

    }

    const h3Style = {
        color: "blue"
    }

    return(
        <div style={pokeStyle}>
            <h3 style={h3Style}>{name}</h3>
            <p><img src={`${BASE_URL}${id}.png`} /></p>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}



export default Pokecard;