import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NavigationService from '../Navigation/NavigationService';
import {MORE_SCREEN} from '../Navigation/routes';

const Welcome = () => {
  const handleNavigate = () => {
    NavigationService.navigate(MORE_SCREEN);
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
        Welcome
      </Text>
      <TouchableOpacity onPress={handleNavigate}>
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          Move to More Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
