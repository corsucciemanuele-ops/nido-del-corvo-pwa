// FASE 1: Stub — nessun tracking CRM
// FASE 2+: Log interazioni cliente su Supabase

import type { InteractionType, RestaurantBrand } from "../types/crm";

export const useCRM = () => {
  const logInteraction = async (
    _type: InteractionType,
    _brand: RestaurantBrand,
    _details?: Record<string, unknown>,
  ) => {
    // Phase 2: insert into customer_interactions
  };

  return { logInteraction };
};
