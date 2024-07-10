import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Questionnaire from './Questionnaire';

test('renders Questionnaire component', () => {
    render(<Questionnaire />);
    const linkElement = screen.getByText(/Please fill out this questionnaire/i);
    expect(linkElement).toBeInTheDocument();
});
