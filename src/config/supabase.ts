// FASE 1: Configurazione stub, nessuna connessione reale
// FASE 2+: Client Supabase istanziato qui

export const SUPABASE_CONFIG = {
  URL: import.meta.env.VITE_SUPABASE_URL || "",
  KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  SERVICE_ROLE_KEY: import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || "",

  TABLES: {
    USER_PROFILES: "user_profiles",
    PINCIO_INVITES: "pincio_invites",
    EVENT_TICKETS: "event_tickets",
    LOYALTY_BADGES: "loyalty_badges",
    CUSTOMER_INTERACTIONS: "customer_interactions",
    PUSH_SUBSCRIPTIONS: "push_subscriptions",
    REFERRAL_CODES: "referral_codes",
  },

  BUCKETS: {
    AVATARS: "user-avatars",
    TICKET_PROOFS: "ticket-proofs",
  },
} as const;

// PHASE 1: Non istanziare Supabase
// import { createClient } from '@supabase/supabase-js';
// export const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.KEY);
// PHASE 2: Uncomment quando pronto
