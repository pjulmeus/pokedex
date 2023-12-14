import React from "react"
import Pokecard from "./pokecard"

const pokedex = ({pokedexArr}) =>{

return (
    <div>
    {pokedexArr.map(pk =>
    <Pokecard key={pk.id} poke_name={pk.name} type = {pk.type} base_experience = {pk.base_experience}/>
    )}
    </div>
)};


export default pokedex