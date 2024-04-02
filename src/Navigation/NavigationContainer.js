/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import 'react-native-gesture-handler';

import NavigationService from './NavigationService';
import * as routes from './routes';
import * as React from 'react';
import {TransitionPresets} from '@react-navigation/stack';

import Authloading from '../screens/Authloading';
import Welcome from '../screens/Welcome';
import More from '../screens/More';
import BackgroundState from '../screens/BackgroundState';
import QuitState from '../screens/QuitState';
import ForeGroundState from '../screens/ForeGroundState';
// import Notification from '../screens/mr/Notification';

const Stack = createStackNavigator();

const options = {...TransitionPresets.SlideFromRightIOS, headerShown: false};

const MyAuthLoadingStack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen
      name={routes.NAVIGATION_AUTH_LOADING_SCREEN}
      component={Authloading}
    />

    <Stack.Screen
      name={routes.BACKGROUND_STATE_SCREEN}
      component={BackgroundState}
    />
    <Stack.Screen name={routes.QUIT_STATE_SCREEN} component={QuitState} />
    <Stack.Screen
      name={routes.FOREGROUND_STATE_SCREEN}
      component={ForeGroundState}
    />

    <Stack.Screen name={routes.NAVIGATION_AUTH_STACK} component={AuthStack} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name={routes.WELCOME_SCREEN} component={Welcome} />
    <Stack.Screen name={routes.MORE_SCREEN} component={More} />
  </Stack.Navigator>
);

const RootStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={routes.NAVIGATION_AUTH_LOADING_STACK}
      component={MyAuthLoadingStack}
    />
  </Stack.Navigator>
);

const Navigationcontainers = () => {
  return (
    <NavigationContainer
      theme={DarkTheme}
      ref={navigationRef => {
        NavigationService.setTopLevelNavigator(navigationRef);
      }}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigationcontainers;
