import { StyleSheet, View, Text } from 'react-native';
import { vs, s } from 'react-native-size-matters';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import SocialSection from '../components/SocialSection';
import TopTabs from '../components/TopTabs';

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>

      <View>
        <Text style={styles.screenTitle}>Mastering UI</Text>
        <Text style={styles.screenSubtitle}>Spanish and Cats are great!</Text>
        <TopTabs />
      </View>
      <View style={styles.socialContainer}>
        <SocialSection />
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
  socialContainer: {
    backgroundColor: '#F5F5FA',
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: 'semibold',
    marginTop: vs(20),
    marginStart: s(19),
  },
  screenSubtitle: {
    fontSize: s(16),
    fontWeight: 'regular',
    marginTop: vs(10),
    marginStart: s(19),
  },
});
