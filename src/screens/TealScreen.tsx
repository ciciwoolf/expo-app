import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';

const TealScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: '#FFFFF', padding: s(16) }}>TealScreen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </SafeAreaView>
  );
};

export default TealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009fb7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
