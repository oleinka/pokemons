import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Logo from './components/Logo/Logo';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';

const App = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [initUrl, setinitUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');
  const [pokemon, setPokemon] = useState(null);
  const [lowerIndex, setLowerIndex] = useState(0);
  const [upperIndex, setUpperIndex] = useState(10);

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

  const sortArray = (e) => {
    const value = e.target.value
    if (value === 'by-name-z') {
      setPokemons([...pokemons.sort((a,b) =>{
        const aName = a.name.toUpperCase();
        const bName = b.name.toUpperCase();
        return (aName > bName) ? -1 : (aName < bName) ? 1 : 0;
       })])
    }
    if (value === 'by-name-a') {
      setPokemons([...pokemons.sort((a,b) =>{
        const aName = a.name.toUpperCase();
        const bName = b.name.toUpperCase();
        return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
       })])
    }
  }

  return (
    <>
    <Logo/>
    <div className={'pokemonDisplay'}>
      {pokemon ? <PokemonDisplay pokemon={pokemon}/>: <div className={'emptyScreen'}></div>}
    </div>
    <div className={'pokemonList'}>
      <div className={'pokeList'}>
        <ul>
        {pokemons.filter((poke, index) => { 
            if (page) {
            return index >= lowerIndex && index < upperIndex;
            }
            })
          .map((poke,i) => 
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
          setPage(1);
          setLowerIndex(0);
          setUpperIndex(10);
        }}>START</button>
        <button onClick={() => {
          if (page>1) {
          setPage(page - 1);
          setLowerIndex(lowerIndex-10);
          setUpperIndex(upperIndex-10);
          }
          else {
          setPage(page); 
          setLowerIndex(lowerIndex);
          setUpperIndex(upperIndex);
          }
          }
          }>PREV</button>
        <button onClick={() => {
          if (page<pokemons.length/10) {
          setPage(page + 1);
          setLowerIndex(lowerIndex+10);
          setUpperIndex(upperIndex+10);
          }
          }
          }>NEXT</button>
        <button onClick={() => {
          setPage(pokemons.length/10); 
          setLowerIndex(pokemons.length-10);
          setUpperIndex(pokemons.length);
          }}>END</button>
        <button value='by-name-a' onClick={sortArray}>A</button>
        <button value='by-name-z' onClick={sortArray}>Z</button>
      </div>
    </div>
    </>
  );
}

export default App;

