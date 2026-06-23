// FASE 1: Stub — restituisce sempre null/false
// FASE 2+: Vera implementazione Supabase Auth

import type { User, AuthState } from "../types/auth";

export interface UseAuthReturn extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const user: User | null = null;
  const session = null;
  const isAuthenticated = false;
  const isLoading = false;

  const login = async (_email: string, _password: string) => {
    // Phase 2: supabase.auth.signInWithPassword({ email, password })
    throw new Error("Auth not implemented in Phase 1.");
  };

  const logout = async () => {
    // Phase 2: supabase.auth.signOut()
    throw new Error("Auth not implemented in Phase 1.");
  };

  const register = async (_email: string, _password: string, _name: string) => {
    // Phase 2: supabase.auth.signUp()
    throw new Error("Auth not implemented in Phase 1.");
  };

  const resetPassword = async (_email: string) => {
    // Phase 2: supabase.auth.resetPasswordForEmail()
    throw new Error("Auth not implemented in Phase 1.");
  };

  return { user, session, isAuthenticated, isLoading, login, logout, register, resetPassword };
};
