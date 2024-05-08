import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NavigationService from '../Navigation/NavigationService';
import {NAVIGATION_AUTH_STACK} from '../Navigation/routes';
import Overlay from 'react-native-overlay';

const Authloading = () => {
  const handleNavigate = () => {
    NavigationService.navigate(NAVIGATION_AUTH_STACK);
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Text
        style={{
          color: 'red',
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        Authloading
      </Text>

      <Overlay
        // isVisible={true}
        style={{
          backgroundColor: 'blue',
        }}>
        <TouchableOpacity onPress={handleNavigate}>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            Move to Auth Stack
          </Text>
        </TouchableOpacity>
      </Overlay>
    </View>
  );
};

export default Authloading;

const styles = StyleSheet.create({});
