import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const renderCharacters = characters.map(character => (
    <li key={character.name}>
      <Character
        name={character.name}
        image={character.image}
      />
    </li>
  ));

  return (
    <ul data-testid="characters">{renderCharacters}</ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
