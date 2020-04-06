import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../PokemonList/PokemonList.module.scss';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');

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
            setPokemons(response.data);
        })
    };

    return (
        <>
        {pokemons.filter((item, index) => {
            return index < 10;
            }).map(({name}) => (
            <li>
            <p>{name}</p>
            <button onClick={() => {
            getPokemonData(url)
            }}>Pokaż w Pokedexie
            </button>
            </li>
            ))}
        </>
    );

};

export default PokemonList;