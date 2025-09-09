import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ContactUsScreen from './src/screens/ContactUsScreen';

export default function App() {
  return <ContactUsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
