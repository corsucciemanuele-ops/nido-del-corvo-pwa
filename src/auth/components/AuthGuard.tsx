// FASE 1: Stub — pass-through, nessuna protezione
// FASE 2+: Redirect a /login se non autenticato

import type { ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  // Phase 2: if (!isAuthenticated) return <Navigate to="/login" />;
  return <>{children}</>;
};
