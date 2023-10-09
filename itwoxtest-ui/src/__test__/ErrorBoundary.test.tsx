import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../errorboundary/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });

  it('displays an error message when an error occurs', () => {
   
    const originalConsoleError = console.error;
    console.error = jest.fn();

    
    const ChildComponentWithError = () => {
      throw new Error('Test Error');
    };

    render(
      <ErrorBoundary>
        <ChildComponentWithError />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText('Something went wrong. Please try again later.');
    expect(errorMessage).toBeInTheDocument();

   
    console.error = originalConsoleError;
  });
});
