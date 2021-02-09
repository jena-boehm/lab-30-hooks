import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ character }) => {
  [character] = character;
  return (
    <figure>
      <figcaption>Name: {character.name}</figcaption>
      <img src={character.image} alt={character.name} />
    </figure>
  );
};


Detail.propTypes = {
  character: PropTypes.array
};

export default Detail;
