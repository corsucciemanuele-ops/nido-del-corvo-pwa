// FASE 1: Stub
// FASE 2+: Supabase calls per log interazioni CRM

export const logVisit = async (_userId: string, _brand: "nido" | "pincio") => {
  // Phase 2: supabase.from('customer_interactions').insert(...)
};

export const logBooking = async (_userId: string, _details: Record<string, unknown>) => {
  // Phase 2: supabase.from('customer_interactions').insert(...)
};

export const logTicketPurchase = async (_userId: string, _ticketId: string) => {
  // Phase 2: supabase.from('customer_interactions').insert(...)
};
