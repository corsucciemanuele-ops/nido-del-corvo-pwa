// FASE 2+: User profile types

export interface UserProfile {
  id: string;
  brand: "nido" | "pincio" | "both";
  qr_pass_code: string;
  loyalty_points: number;
  preferred_name?: string;
  created_at: string;
  updated_at: string;
}

export interface QRPass {
  code: string;
  user_id: string;
  generated_at: string;
}
