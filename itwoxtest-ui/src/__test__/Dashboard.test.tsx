import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../views/Dashboard/Dashboard';
import { DataContextProvider } from '../store/DataContext';

test('Dashboard name is present', () => {
    render(
        <DataContextProvider> 
          <Dashboard />
        </DataContextProvider>
      );
  const dashboardHeader = screen.getByText('Dashboard');
  expect(dashboardHeader).toBeInTheDocument();
});
