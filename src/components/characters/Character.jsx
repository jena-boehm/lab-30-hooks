import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, image }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <Link to={`/character/${name}`}>
      <img src={image} alt={name} />
    </Link>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
