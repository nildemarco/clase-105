import React from 'react';
import useFetch from './hooks/useFetch';

const Pokemones = () => {

   const pokemones = useFetch(`https://pokeapi.co/api/v2/pokemon`);
   
    return (
            <>
          { pokemones &&
              pokemones.results.map(p => <p key={p.name}>{p.name}</p>)
          }
          </>
    );
}

export default Pokemones;