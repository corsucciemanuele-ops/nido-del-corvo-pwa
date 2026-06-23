// FASE 1: Stub — nessuna logica fidelity
// FASE 2+: Punti, badge, rewards da Supabase

import type { Badge, LoyaltyPoints } from "../types/fidelity";

export const useFidelity = () => {
  const points: LoyaltyPoints | null = null;
  const badges: Badge[] = [];
  const isLoading = false;

  return { points, badges, isLoading };
};
