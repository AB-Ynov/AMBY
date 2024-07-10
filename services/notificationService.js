import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Exemple pour envoyer une notification
Notifications.scheduleNotificationAsync({
  content: {
    title: "Vous avez une nouvelle notification!",
    body: "Ceci est le corps de la notification.",
  },
  trigger: { seconds: 2 },
});
