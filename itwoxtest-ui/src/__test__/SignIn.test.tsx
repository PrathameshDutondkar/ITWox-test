import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "../views/SignIn/SignIn";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("SignIn Component", () => {
  test("should render a Sign In text", () => {
    render(
      <AuthProvider>
        <Router>
          <SignIn />
        </Router>
      </AuthProvider>
    );

    const signInButton = screen.getByText("Sign In");
    expect(signInButton).toBeInTheDocument();
  });

  test("should render a username  and passwordlabel", () => {
    render(
      <AuthProvider>
        <Router>
          <SignIn />
        </Router>
      </AuthProvider>
    );

    const usernameLabel = screen.getByLabelText("username");
    expect(usernameLabel).toBeInTheDocument();
    const passwordLabel = screen.getByLabelText("Password");
    expect(passwordLabel).toBeInTheDocument();
  });
  test("should render a Sign In button", () => {
    render(
      <AuthProvider>
        <Router>
          <SignIn />
        </Router>
      </AuthProvider>
    );

    const signInButton = screen.getByText("Signin");
    expect(signInButton).toBeInTheDocument();
  });
  test("should sign in a user with valid credentials", () => {
    render(
      <AuthProvider>
        <Router>
          <SignIn />
        </Router>
      </AuthProvider>
    );

    const emailInput = screen.getByPlaceholderText("Enter your email address");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByText("Signin");

    userEvent.type(emailInput, (process.env.REACT_APP_EMAIL || "").toString());
    userEvent.type(
      passwordInput,
      (process.env.REACT_APP_PASSWORD || "").toString()
    );
    userEvent.click(submitButton);
  });
  it("should not sign in a user with invalid credentials", () => {
    render(
      <AuthProvider>
        <Router>
          <SignIn />
        </Router>
      </AuthProvider>
    );

    const emailInput = screen.getByPlaceholderText("Enter your email address");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByText("Signin");

    userEvent.type(emailInput, "invalid@example.com");
    userEvent.type(passwordInput, "wrongpassword");
    userEvent.click(submitButton);
  });
});
