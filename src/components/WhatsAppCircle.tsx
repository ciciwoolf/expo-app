import { StyleSheet, View } from 'react-native';
import { s } from 'react-native-size-matters';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const WhatsAppCircle = () => {
  return (
    <View style={styles.circle}>
      <FontAwesome name="whatsapp" size={24} color="#1077AF" />
    </View>
  );
};

export default WhatsAppCircle;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: s(1),
    borderColor: '#1077AF',
  },
});
