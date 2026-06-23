// FASE 2+: CRM types

export type InteractionType =
  | "visit"
  | "booking"
  | "event"
  | "purchase"
  | "review"
  | "ticket_purchase";

export type RestaurantBrand = "nido" | "pincio";

export interface Customer {
  id: string;
  user_id: string;
  brand: RestaurantBrand;
  total_visits: number;
  last_visit?: string;
  notes?: string;
}

export interface Interaction {
  id: string;
  user_id: string;
  interaction_type: InteractionType;
  restaurant_brand: RestaurantBrand;
  details?: Record<string, unknown>;
  created_at: string;
}
