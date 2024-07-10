import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventDetail from './EventDetail';

test('renders EventDetail component', () => {
    render(<EventDetail />);
    const linkElement = screen.getByText(/Event Details/i);
    expect(linkElement).toBeInTheDocument();
});
