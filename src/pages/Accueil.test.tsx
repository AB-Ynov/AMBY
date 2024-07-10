import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accueil from './Accueil';

test('renders Accueil component', () => {
    render(<Accueil />);
    const linkElement = screen.getByText(/Welcome to the Home Page/i);
    expect(linkElement).toBeInTheDocument();
});
