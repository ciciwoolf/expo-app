import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { s } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const DarkScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>DarkScreen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </SafeAreaView>
  );
};

export default DarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20063b',
  },
  text: {
    padding: s(16),
    color: '#ffffff',
    fontSize: s(16),
  },
});
