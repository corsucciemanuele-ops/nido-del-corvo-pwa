// FASE 2+: Auth types per Supabase Auth

export interface User {
  id: string;
  email: string;
  name: string;
  qr_pass_code?: string;
}

export interface Session {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  user: User;
}

export interface AuthState {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
