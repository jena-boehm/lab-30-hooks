import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/fetchCharacters';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  if(loading) return <div>Loading</div>;
  return <CharacterList characters={characters} />;
};

export default HomePage;
