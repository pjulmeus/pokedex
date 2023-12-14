import React from "react"

const Pokecard = ({id, poke_name, type, base_experience}) => {
let pokeimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
return (
    <div key={id}>
        <h3>{poke_name}</h3>
        <img src={pokeimg} alt={poke_name}/>
        <p> Type: {type}</p>
        <p> Base Experience : {base_experience}</p>
    </div>   
)}

export default Pokecard