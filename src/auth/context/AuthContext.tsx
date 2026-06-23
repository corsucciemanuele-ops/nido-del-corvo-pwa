// FASE 1: Stub context — sempre null
// FASE 2+: Gestisce session Supabase reale

import { createContext, useContext, useState, type ReactNode } from "react";

export interface AuthContextType {
  user: null;
  session: null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading] = useState(false);

  const value: AuthContextType = {
    user: null,
    session: null,
    isAuthenticated: false,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
};
