import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

describe('HomePage container', () => {
  it('displays a loading screen then a list of characters', async() => {
    render(
      <Router>
        <HomePage />
      </Router>);

    screen.getByText('Loading');

    const list = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(list).not.toBeEmptyDOMElement();
    });
  });
});
