// DisplayOverOtherApps.js

import React from 'react';
import {View, Button, NativeModules, Alert} from 'react-native';
import {PermissionsAndroid} from 'react-native';

const {FloatingView} = NativeModules;

const DisplayOverOtherApps = () => {
  const showFloatingView = () => {
    // if (requestOverlayPermission()) {
    // requestOverlayPermission();
    if (true) {
      console.log('show floating');
      FloatingView.showFloatingView();
    }
  };

  const hideFloatingView = () => {
    console.log('hide floating');

    FloatingView.hideFloatingView();
  };

  const requestOverlayPermission = async () => {
    const checkLocationPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.SYSTEM_ALERT_WINDOW,
    );
    console.log(checkLocationPermission, 'checkLocationPermission');
    // try {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.SYSTEM_ALERT_WINDOW,
    //     {
    //       title: 'Permission Request',
    //       message: 'This app needs permission to draw over other apps.',
    //       buttonNeutral: 'Ask Me Later',
    //       buttonNegative: 'Cancel',
    //       buttonPositive: 'OK',
    //     },
    //   );
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log('Overlay permission granted');
    //     return true;
    //     // Now you can show your floating view
    //   } else {
    //     console.log('Overlay permission denied');
    //     return false;

    //     // Handle the case where the permission was denied
    //   }
    // } catch (err) {
    //   console.warn(err);
    //   return false;
    // }

    // try {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //     {
    //       title: 'App required Location permission',
    //       message:
    //         'We required Location permission in order to get device location ' +
    //         'Please grant us.',
    //     },
    //   );
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log('Overlay permission granted');
    //     return true;
    //   } else {
    //     Alert.alert(
    //       'Location Permission not Granted.Enable location from App Settings',
    //     );
    //   }
    // } catch (err) {
    //   console.log(err, 'error');
    // }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Button title="Show Floating View" onPress={showFloatingView} />
      <Button title="Hide Floating View" onPress={hideFloatingView} />
    </View>
  );
};

export default DisplayOverOtherApps;
