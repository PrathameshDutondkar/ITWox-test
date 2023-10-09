import React from "react";
import { render, screen,  } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../views/NavBar/Navbar";

// Helper function to render Navbar component for testing.
const renderNavbar = (pathname = "/") =>
  render(
    <MemoryRouter initialEntries={[pathname]}>
      <Navbar />
    </MemoryRouter>
  );

describe("Navbar Component", () => {
  beforeEach(() => {
    // Set up a common condition: Simulate being logged in by setting a user in localStorage.
    localStorage.setItem("user", "test@example.com");
  });

  afterEach(() => {
    // Clean up: Remove the user from localStorage after each test.
    localStorage.removeItem("user");
  });

  test("renders Sign In button when not logged in", () => {
    // Clear user from localStorage for this specific test.
    localStorage.removeItem("user");

    renderNavbar("/");
    const signInButton = screen.getByText("Sign In");
    expect(signInButton).toBeInTheDocument();
  })
  
  
  test("Navbar does not render on the Sign In page", () => {
    renderNavbar("/signin");
    expect(screen.queryByText("Sign In")).toBeNull();
    expect(screen.queryByText("Sign Out")).toBeNull();
  });
});
