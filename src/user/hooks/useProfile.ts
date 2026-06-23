// FASE 1: Stub — profilo sempre null
// FASE 2+: Fetch profilo da Supabase user_profiles

import type { UserProfile } from "../types/profile";

export const useProfile = () => {
  const profile: UserProfile | null = null;
  const isLoading = false;

  return { profile, isLoading };
};
