import {Text, TouchableOpacity, View} from 'react-native';
import PipHandler, {usePipModeListener} from 'react-native-pip-android';

const PipMode = () => {
  // Use this boolean to show / hide ui when pip mode changes
  const inPipMode = usePipModeListener();

  if (inPipMode) {
    return (
      <View
        style={{
          backgroundColor: 'red',
        }}>
        <Text>PIP Mode</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <Text>These text components will be hidden in pip mode</Text>
      <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)}>
        <Text>Click to Enter Pip Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PipMode;

// android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
