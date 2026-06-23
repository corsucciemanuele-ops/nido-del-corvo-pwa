// FASE 1: Stub
// FASE 2+: Firebase Cloud Messaging setup

export const FCM_CONFIG = {
  projectId: import.meta.env.VITE_FCM_PROJECT_ID || "",
  apiKey: import.meta.env.VITE_FCM_API_KEY || "",
  senderId: import.meta.env.VITE_FCM_SENDER_ID || "",
  appId: import.meta.env.VITE_FCM_APP_ID || "",
} as const;

// Phase 2: initializeApp(FCM_CONFIG)
// Phase 2: const messaging = getMessaging()
