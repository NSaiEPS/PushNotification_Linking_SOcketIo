import messaging from '@react-native-firebase/messaging';

import NavigationService from '../Navigation/NavigationService';
import {
  BACKGROUND_STATE_SCREEN,
  NAVIGATION_AUTH_LOADING_STACK,
} from '../Navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFcmToken();
    notificationListener(); // Start listening for notifications
  }
};

let GetFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmtoken');
  console.log(fcmToken, 'oldtoken');
  if (!fcmToken) {
    try {
      let fcmToken = await messaging().getToken();
      await AsyncStorage.setItem('fcmtoken', fcmToken);
    } catch (error) {
      console.log(error, 'error');
    }
  }
};

export const notificationListener = async () => {
  // Listen for notification when app is in background or terminated
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    handleNotification(remoteMessage.data);
  });

  // Listen for notification when app is in foreground
  messaging().onMessage(async remoteMessage => {
    console.log('Received in foreground', remoteMessage);
    handleNotification(remoteMessage.data);
  });
};

const handleNotification = data => {
  // Handle the notification data here
  // For example, navigate to a specific screen
  console.log('Received notification data:', data);
  NavigationService.navigate(NAVIGATION_AUTH_LOADING_STACK);
  console.log('Navigated to', NAVIGATION_AUTH_LOADING_STACK);
};
