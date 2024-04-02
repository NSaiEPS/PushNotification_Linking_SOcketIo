import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';
import NavigationService from '../Navigation/NavigationService';

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
    // Alert.alert(
    //   'Notification caused app to open from background state:',
    //   'My Alert Msg',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: () => NavigationService.navigate(NAVIGATION_AUTH_STACK),
    //     },
    //   ],
    // );
    NavigationService.navigate(BACKGROUND_STATE_SCREEN);

    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging().onMessage(async remoteMessage => {
    console.log('Received in forground', remoteMessage);
    // Alert.alert(remoteMessage?.notification?.body);
    Alert.alert(remoteMessage?.notification?.body, 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => NavigationService.navigate(FOREGROUND_STATE_SCREEN),
      },
    ]);

    // NavigationService.navigate(NAVIGATION_AUTH_LOADING_STACK);

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
        // If
        // Alert.alert('Notification caused app to open from quit state:',);
        Alert.alert(
          'Notification caused app to open from quit statesssss:',
          'My Alert Msg',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => NavigationService.navigate(QUIT_STATE_SCREEN),
            },
          ],
        );

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
