/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  notificationListener,
  requestUserPermission,
} from './src/utils/pushNotification_helper';
import Navigationcontainers from './src/Navigation/NavigationContainer';
import DisplayOverOtherApps from './src/DisplayOverOtherApps';
import Splashscreen from './src/AnimatedSplash';
import TopNavigation from './src/TopNavigation';
// import Webview from './src/Webview/webview';
import Webviewindex from './src/Webview/webview';
// import PipMode from './src/PipMode';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    requestUserPermission();
    notificationListener();
    // onAppStart(store);
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  // return <Navigationcontainers />;
  const [show, notShow] = useState(true);
  // return (
  //   <>
  //     {show && <Splashscreen notShow={notShow} />}

  //     <DisplayOverOtherApps />
  //   </>
  // );
  return <Webviewindex />;
  // return <PipMode />;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
