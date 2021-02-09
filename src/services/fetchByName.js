/* eslint-disable max-len */
export const getCharacterByName = (name) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(res => res.json());
};
  
