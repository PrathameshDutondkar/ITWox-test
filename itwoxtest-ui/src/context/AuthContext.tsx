import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, password: string) => {
  
    const Email = "prathameshdutondkar97@gmail.com";
    const Password = "Prathamesh@13";

    if (email === Email && password === Password) {
      setUser({ email });
      localStorage.setItem("user", JSON.stringify({ email }));
      return true;
    } else {
      return false;
    }
  };

  const signOut = () => {
    // Add any sign-out logic if needed.
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
