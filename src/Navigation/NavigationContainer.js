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
// import Notification from '../screens/mr/Notification';

const Stack = createStackNavigator();

const options = {...TransitionPresets.SlideFromRightIOS, headerShown: false};

const MyAuthLoadingStack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen
      name={routes.NAVIGATION_AUTH_LOADING_SCREEN}
      component={Authloading}
    />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name={routes.WELCOME_SCREEN} component={Welcome} />
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
