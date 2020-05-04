import React from 'react';
import useFetch from './useFetch';

const Pokemones = () => {

   const pokemones = useFetch(`https://pokeapi.co/api/v2/pokemon`)
   
    return (
            <>
          { pokemones &&
              pokemones.results.map(p => <p key={p.id}>{p.name}</p>)
          }
          </>
    );
}

export default Pokemones;