

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

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

  useEffect(() => {
    
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signIn = (email: string, password: string) => {
    const Email = process.env.REACT_APP_EMAIL;
    const Password = process.env.REACT_APP_PASSWORD;
 

    if (email === Email && password === Password) {
      const newUser = { email };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    } else {
      return false;
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
