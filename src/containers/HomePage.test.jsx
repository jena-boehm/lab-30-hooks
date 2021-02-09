import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage container', () => {
  it('displays a loading screen then a list of characters', async() => {
    render(<HomePage />);

    screen.getByText('Loading');

    const list = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(list).not.toBeEmptyDOMElement();
    });
  });
});
