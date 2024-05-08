import LottieView from 'lottie-react-native';
import React from 'react';
import {Modal, Text, View} from 'react-native';

const Splashscreen = props => {
  const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] =
    React.useState(false);
  const {notShow} = props;

  // We only want to hide the Splash Screen after it has played at least once
  const handleAnimationFinish = () => {
    setHasAnimationPlayedOnce(true);
    notShow(false);
    console.log('finished');
  };

  const isModalVisible = !(props.isAppInitialized && hasAnimationPlayedOnce);

  return (
    <Modal
      style={{
        backgroundColor: 'red',
        width: 20,
        height: 29,
      }}
      visible={isModalVisible}
      transparent={true}
      animationType="fade">
      <LottieView
        source={require('../Images/tick-white.json')}
        loop={false}
        autoPlay
        onAnimationFinish={handleAnimationFinish}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}
      />
    </Modal>
  );
};

export default Splashscreen;
