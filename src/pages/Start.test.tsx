import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Start from './Start';

test('renders Start component', () => {
    render(<Start />);
    const linkElement = screen.getByText(/Welcome to the Start Page/i);
    expect(linkElement).toBeInTheDocument();
});
