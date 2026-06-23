// FASE 2+: Event ticket types

export type TicketStatus = "pending" | "confirmed" | "used" | "refunded";

export interface Ticket {
  id: string;
  user_id: string;
  event_id: string;
  event_name: string;
  quantity: number;
  total_amount: number;
  status: TicketStatus;
  payment_method?: string;
  payment_intent_id?: string;
  created_at: string;
  used_at?: string;
}

export interface EventTicket extends Ticket {
  event_date: string;
  event_location: string;
  qr_code: string;
}
