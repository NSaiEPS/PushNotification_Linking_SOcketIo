import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NavigationService from '../Navigation/NavigationService';
import {NAVIGATION_AUTH_STACK} from '../Navigation/routes';

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
      <TouchableOpacity onPress={handleNavigate}>
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          Move to Auth Stack
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authloading;

const styles = StyleSheet.create({});
