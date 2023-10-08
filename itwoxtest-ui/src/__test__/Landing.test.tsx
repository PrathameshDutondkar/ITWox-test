import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../views/LandingPage/Landing';

describe('Landing Component', () => {
  it('renders the welcome message', () => {
    render(<Landing />);
    const welcomeMessage = screen.getByText('Welcome to ITWOX Test');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Landing />);
    const description = screen.getByText('This is a landing page for the ITWOX Test.');
    expect(description).toBeInTheDocument();
  });

  
});
