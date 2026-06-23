// FASE 1: Stub — nessun ticket
// FASE 2+: Fetch tickets utente da Supabase

import type { Ticket } from "../types/tickets";

export const useTickets = () => {
  const tickets: Ticket[] = [];
  const isLoading = false;

  return { tickets, isLoading };
};
