// FASE 1: Stub — session sempre null
// FASE 2+: Legge session da Supabase

export const useSession = () => {
  return {
    session: null,
    isLoading: false,
  };
};
