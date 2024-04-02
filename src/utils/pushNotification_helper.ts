import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFcmToken();
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
  messaging().onNotificationOpenedApp(remoteMessage => {
    Alert.alert('Notification caused app to open from background state:');

    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging().onMessage(async remoteMessage => {
    console.log('Received in forground', remoteMessage);
    Alert.alert(remoteMessage?.notification?.body);
    PushNotification.localNotification({
      message: remoteMessage?.notification.body,
      title: remoteMessage?.notification.title,
      bigPictureUrl: remoteMessage?.notification.android.imageUrl,
      smallIcon: remoteMessage?.notification.android.imageUrl,
    });
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        Alert.alert('Notification caused app to open from quit state:');

        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });
};

// Import necessary modules
import {useEffect} from 'react';
import {Platform} from 'react-native';

// Function to handle background notifications
const handleBackgroundNotification = async () => {
  // Logic to open the app automatically
  // This might involve navigating to a specific screen or performing an action
  Alert.alert('Notification caused app to open from background state:');
};

// Component to handle push notifications
const PushNotificationHandler = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Handle background notification when the app is not in the foreground
      if (remoteMessage.notification && Platform.OS === 'android') {
        handleBackgroundNotification();
      }
    });

    // Unsubscribe from message listener when component unmounts
    return unsubscribe;
  }, []);

  // Check for initial notification when the app is opened from a closed state
  useEffect(() => {
    const checkInitialNotification = async () => {
      const initialNotification = await messaging().getInitialNotification();
      if (initialNotification && Platform.OS === 'android') {
        handleBackgroundNotification();
      }
    };

    checkInitialNotification();
  }, []);

  return null; // No UI component needed for this handler
};

export default PushNotificationHandler;
