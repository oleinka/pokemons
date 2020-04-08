import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Logo from './components/Logo/Logo';

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [nextLink, setNextLink] = useState(null);
  const [prevLink, setPrevLink] = useState(null);
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000');

  useEffect(() => {
      axios.get(url)
          .then((response) => {
              setPokemons(response.data.results);
          })
          .catch(error => {
              console.error(error)
          })

  }, []);

  const getPokemonData = (url) => {
      axios.get(url).then((response) => {
          setPokemons(response.data.results);
      })
  };
  
  return (
    <>
    <Logo/>
    <div className={'pokemonDisplay'}>

    </div>
    <div className={'pokemonList'}>
    <ul>
    {pokemons.map(({name}) => (
      <li>
      <p>{name}</p>
      <button>Pokaż
      </button>
      </li>
      ))}
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

