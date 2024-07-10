import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profil from './Profil';

test('renders Profil component', () => {
    render(<Profil />);
    const linkElement = screen.getByText(/My Profile/i);
    expect(linkElement).toBeInTheDocument();
});
