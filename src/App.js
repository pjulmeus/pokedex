import React from 'react';
import logo from './logo.svg';
import Pokedex from './pokedex';
import pokedexArr from './pokedexArr';
import './App.css';

function App() {
  return (
  <>
  <h1 className='pokecard' >Pokedex</h1>
  <Pokedex pokedexArr = {pokedexArr}/>
  </>
  );
}

export default App;
