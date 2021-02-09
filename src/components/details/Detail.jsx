import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, image }) => (
  <figure>
    <figcaption>Name: {name}</figcaption>
    <img src={image} alt={name} />
  </figure>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Detail;
