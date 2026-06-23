// FASE 1: Stub — nessuna notifica
// FASE 2+: FCM registration e handler

export const usePushNotifications = () => {
  const isSupported = false;
  const isSubscribed = false;

  const subscribe = async () => {
    // Phase 2: Request FCM permission + register token
    throw new Error("Push notifications not implemented in Phase 1.");
  };

  const unsubscribe = async () => {
    // Phase 2: Remove FCM token from Supabase
    throw new Error("Push notifications not implemented in Phase 1.");
  };

  return { isSupported, isSubscribed, subscribe, unsubscribe };
};
