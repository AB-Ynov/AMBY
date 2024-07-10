import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MapEvent from './MapEvent';

test('renders MapEvent component', () => {
    render(<MapEvent />);
    const linkElement = screen.getByText(/Event Map/i);
    expect(linkElement).toBeInTheDocument();
});
