// FASE 2+: Push notification types

export interface PushSubscription {
  id: string;
  user_id: string;
  fcm_token: string;
  device_type: "web" | "ios" | "android";
  active: boolean;
  created_at: string;
}

export interface PushMessage {
  title: string;
  body: string;
  icon?: string;
  url?: string;
  data?: Record<string, unknown>;
}

export interface Notification extends PushMessage {
  id: string;
  read: boolean;
  received_at: string;
}
