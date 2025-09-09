import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { s } from 'react-native-size-matters';
import Feather from '@expo/vector-icons/Feather';

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <Feather name="send" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1077AF',
  },
});
