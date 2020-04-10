import React from 'react';

const PokemonDisplay = ({pokemon}) => {
return ( <>
<img src={pokemon.sprites.front_default}/>
</>
);
};
export default PokemonDisplay;