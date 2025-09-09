import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { s } from 'react-native-size-matters';
import AntDesign from '@expo/vector-icons/AntDesign';

const BackButton = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={20} color="black" />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
