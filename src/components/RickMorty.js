import React from 'react';
import useFetch from './hooks/useFetch';

const RickMorty = () => {

  const personajes = useFetch(`https://rickandmortyapi.com/api/character`);
    return (
        <>
      { personajes &&
          personajes.results.map(p => <p key={p.id}>{p.name}</p>)
      }
      </>
    );
}

export default RickMorty;