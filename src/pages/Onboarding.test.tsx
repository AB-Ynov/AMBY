import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Onboarding from './Onboarding';

test('renders Onboarding component', () => {
    render(<Onboarding />);
    const linkElement = screen.getByText(/Welcome to the Onboarding Process/i);
    expect(linkElement).toBeInTheDocument();
});
