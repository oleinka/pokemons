import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Logo from './components/Logo/Logo';


const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [nextLink, setNextLink] = useState(null);
  const [prevLink, setPrevLink] = useState(null);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');

  useEffect(() => {
      axios.get(url)
          .then((response) => {
              setPokemons(response.data.results);
          })
          .catch(error => {
              console.error(error)
          })

  }, [url]);

  const getPokemonData = (url) => {
      axios.get(url).then((response) => {
          setPokemon(response.data);
      })
  };

  return (
      <>
      <header>
        <Logo/>
      </header>
      <div className='pokemonList'>
          <ul>
            {pokemons.filter((item, index) => {
              return index < 8;
              }).map(({name, url}) => (
              <li>
                <p>{name}</p>
                <button onClick={() => {
                  getPokemonData(url)
                  }}>Pokaż w Pokedexie
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
