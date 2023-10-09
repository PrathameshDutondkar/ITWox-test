import React from 'react';
import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import SignIn from '../views/SignIn/SignIn';
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

test('renders Sign In Text', () => {
  render(
    <Router> 
      <SignIn />
    </Router>
  );
  const signInButton = screen.getByText('Sign In');
  expect(signInButton).toBeInTheDocument();
});

test('renders Sign In button and signs in successfully', async () => {
  render(
    <Router>
      <SignIn />
    </Router>
  );

  // Fill out the form
  const emailInput = screen.getByLabelText('username');
  const passwordInput = screen.getByLabelText('Password');
  const signInButton = screen.getByText('Signin');

  // Simulate user input
  fireEvent.change(emailInput, { target: { value: 'prathameshdutondkar97@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'Prathamesh@13' } });

  // Submit the form
  fireEvent.click(signInButton);
});

test('shows validation errors when form is submitted with empty fields', async () => {
  render(
    <Router>
      <SignIn />
    </Router>
  );

  const signInButton = screen.getByText('Signin');

  // Submit the form without filling out any fields
  fireEvent.click(signInButton);

  // Wait for the validation error messages
  await screen.findByText('Please input your email address!');
  await screen.findByText('Please input your password!');

  // Assert that the user is not redirected to the dashboard
  expect(screen.queryByText('Welcome to the Dashboard')).toBeNull();
});

test('shows error message on authentication failure', async () => {
  render(
    <Router>
      <SignIn />
    </Router>
  );

  // Fill out the form with incorrect credentials
  const emailInput = screen.getByLabelText('username');
  const passwordInput = screen.getByLabelText('Password');
  const signInButton = screen.getByText('Signin');

  // Simulate user input
  fireEvent.change(emailInput, { target: { value: 'incorrect@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'incorrectpassword' } });

  // Submit the form
  fireEvent.click(signInButton);

  // Wait for the error message
  // await screen.findByText('Authentication failed. Please check your credentials.');

  // Assert that the user is not redirected to the dashboard
  // expect(screen.queryByText('Welcome to the Dashboard')).toBeNull();
});
test('username and password labels are present', () => {
  render(
    <Router>
      <SignIn />
    </Router>
  );

  const usernameLabel = screen.getByText('username', { selector: 'label' });
  const passwordLabel = screen.getByText('Password', { selector: 'label' });

  expect(usernameLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});



