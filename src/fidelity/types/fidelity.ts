// FASE 2+: Fidelity / Loyalty types

export interface LoyaltyPoints {
  user_id: string;
  total: number;
  last_updated: string;
}

export interface Badge {
  id: string;
  user_id: string;
  badge_name: string;
  badge_icon: string;
  badge_level: number;
  unlocked_at: string;
}

export interface Reward {
  id: string;
  name: string;
  points_required: number;
  description: string;
}
