import React from 'react';
import styles from '../PokemonDisplay/PokemonDisplay.module.scss';

const PokemonDisplay = ({pokemon}) => {

const pokemonType = pokemon.types;



return ( <>
<div className={styles.screen}>
    <img className={styles.pokemonImg} src={pokemon.sprites.front_default} alt='pokemon'/>
    <div>
        <p>{pokemon.name}</p>
        <p>Typ: {pokemonType.map(({type})=>`${type.name} `)}</p>
        <p>Waga: {pokemon.weight}</p>
    </div>
</div>
</>
);
};
export default PokemonDisplay;