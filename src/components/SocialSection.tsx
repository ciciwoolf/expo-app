import { StyleSheet, Text, View } from 'react-native';
import { s } from 'react-native-size-matters';
import WhatsAppCircle from './WhatsAppCircle';
import SendButton from './SendButton';

const SocialSection = () => {
  return (
    <View style={styles.container}>
      <WhatsAppCircle />
      <Text style={styles.text}>WhatsApp</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6E8',
    paddingVertical: s(15),
  },
  text: {
    marginStart: s(14),
    flex: 1,
  },
});
