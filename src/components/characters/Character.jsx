import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, image }) => (
  <figure>
    {/* <Link to={`/character/${name}`}> */}
    <figcaption>{name}</figcaption>
    {/* </Link> */}
    <img src={image} alt={name} />
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
