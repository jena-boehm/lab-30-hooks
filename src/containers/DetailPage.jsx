import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterByName } from '../services/fetchByName';
import Detail from '../components/details/Detail';

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    getCharacterByName(name)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, []);

  if(loading) return <div>Loading</div>;
  return <Detail character={character} />;
};

export default DetailPage;
