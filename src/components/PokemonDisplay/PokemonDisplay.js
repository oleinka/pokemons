import React from 'react';
import styles from '../PokemonDisplay/PokemonDisplay.module.scss';

const PokemonDisplay = ({pokemon}) => {
return ( <>
<div className={styles.screen}>
<img className={styles.pokemonImg} src={pokemon.sprites.front_default}/>
</div>
</>
);
};
export default PokemonDisplay;