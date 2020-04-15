import React from 'react';
import styles from '../PokemonDisplay/PokemonDisplay.module.scss';

const PokemonDisplay = ({pokemon}) => {

return ( <>
<div className={styles.screen}>
    <img className={styles.pokemonImg} src={pokemon.sprites.front_default} alt='pokemon'/>
    <div>
        <p>{pokemon.name}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
    </div>
</div>
</>
);
};
export default PokemonDisplay;