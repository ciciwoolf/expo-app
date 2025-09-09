import { StyleSheet, View } from 'react-native';
import { vs, s } from 'react-native-size-matters';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
