import React from 'react';
import './App.css';
import RickMorty from './components/RickMorty';
import Pokemones from './components/Pokemones';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Pokemones />
      <RickMorty />
      <Form/>
    </div>
  );
}

export default App;
