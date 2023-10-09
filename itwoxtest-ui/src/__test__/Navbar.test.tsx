import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event';




import Navbar from "../views/NavBar/Navbar";
import { AuthProvider } from "../context/AuthContext";


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
   
    jest.spyOn(require("../context/AuthContext"), "useAuth").mockImplementation(() => ({
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
  // test("should redirect to the sign-in page when clicking 'Sign In'", () => {
  //   render(
  //     <MemoryRouter initialEntries={["/"]}>
        
  //       <Routes>
  //         <Route path="/" element={<Navbar />} />
  //         <Route path="/signin" element={<div data-testid="signin-page">Sign In Page</div>} />
  //       </Routes>
      
  //     </MemoryRouter>
  //   );
  
  //   const signInButton = screen.getByText("Sign In");
  //   userEvent.click(signInButton);
  
  //   const signInPage = screen.getByTestId("signin-page");
  //   expect(signInPage).toBeInTheDocument();
  // });
  // test("should display the logo when the user is signed in", () => {
  //   jest.spyOn(require("../context/AuthContext"), "useAuth").mockImplementation(() => ({
  //     user: { email: "test@example.com" },
  //     signOut: jest.fn(),
  //   }));
  
  //   render(
  //     <MemoryRouter initialEntries={["/"]}>
  //       <AuthProvider>
  //       <Routes>
  //         <Route path="/" element={<Navbar />} />
  //       </Routes>
  //       </AuthProvider>
  //     </MemoryRouter>
  //   );
  
  //   const logoElement = screen.getByAltText("IT WOX Logo");
  //   expect(logoElement).toBeInTheDocument();
  // });
  
  
});
