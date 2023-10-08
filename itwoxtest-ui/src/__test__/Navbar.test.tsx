import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../views/NavBar/Navbar";
    

describe("Navbar Component", () => {
  it("renders Sign In button when not logged in", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    const signInButton = screen.getByText("Sign In");
    expect(signInButton).toBeInTheDocument();
  });
});
