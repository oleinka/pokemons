import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Logo from './components/Logo/Logo';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';

const App = () => {
  const [nextLink, setNextLink] = useState(null);
  const [prevLink, setPrevLink] = useState(null);
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [initUrl, setinitUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
      axios.get(initUrl)
          .then((response) => {
              setPokemons(response.data.results);
          })
          .catch(error => {
              console.error(error)
          })
  }, []);

  const getPokemonData = (initUrl) => {
      axios.get(initUrl).then((response) => {
          setPokemons(response.data.results);
      })
  };

  const showPoke = (url) => {
    axios.get(url).then((response) => {
        setPokemon(response.data);
    })
  };

  return (
    <>
    <Logo/>
    <div className={'pokemonDisplay'}>
      {pokemon ? <PokemonDisplay pokemon={pokemon}/>: <div className={'emptyScreen'}></div>}
    </div>
    <div className={'pokemonList'}>
      <div className={'pokeList'}>
        <ul>
        {pokemons.map((poke,i) => 
          ( 
          <li>
          <p>{poke.name}</p>
          <button onClick={()=>showPoke(poke.url)}>Pokaż
          </button>
          </li>
          ))}
        </ul>
      </div>
      <div className={'controlBars'}>
        <button onClick={() => {
          setPage(page - 1)
          }}>PREV</button>
        <button onClick={() => {
        setPage(page + 1)
          }}>NEXT</button>
        <button onClick={() => {
          }}>A</button>
          <button onClick={() => {
          }}>Z</button>
      </div>
    </div>
    </>
  );
}

export default App;

