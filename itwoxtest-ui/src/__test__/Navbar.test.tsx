import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";


import Navbar from "../views/NavBar/Navbar";

jest.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    user: null,
    signOut: jest.fn(),
  }),
}));

describe("Navbar Component", () => {
  test("should render the Sign In button when not signed in", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    );

    const signInButton = screen.getByText("Sign In");
    expect(signInButton).toBeInTheDocument();
  });

  test("should render the Sign Out button when signed in", () => {
    jest
      .spyOn(require("../context/AuthContext"), "useAuth")
      .mockImplementation(() => ({
        user: { email: "test@example.com" },
        signOut: jest.fn(),
      }));

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    );

    const signOutButton = screen.getByText("Sign Out");
    expect(signOutButton).toBeInTheDocument();
  });
 
});
