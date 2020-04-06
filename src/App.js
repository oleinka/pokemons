import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Logo from './components/Logo/Logo';
import PokemonList from './components/PokemonList/PokemonList';



const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [nextLink, setNextLink] = useState(null);
  const [prevLink, setPrevLink] = useState(null);
  const [page, setPage] = useState(1);
  
  return (
    <>
    <header>
    <Logo/>
    </header>
    <div className={'pokemonList'}>
    <ul>
    <PokemonList/>
    </ul>
    </div>
    <button onClick={() => {
        setPage(page - 1)
    }}>Poprzednia strona
    </button>
    <button onClick={() => {
        setPage(page + 1)
    }}>Następna strona</button>
    </>
  );
}

export default App;
