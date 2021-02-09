import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/fetchCharacters';

export default class HomePage extends Component {
    state = {
      loading: true,
      characters: []
    }

    componentDidMount() {
      getCharacters()
        .then(characters => this.setState(
          { loading: false, characters }));
    }

    render() {
      const { loading, characters } = this.state;

      if(loading) return <div>Loading</div>;

      return <CharacterList characters={characters} />;
    }
}
