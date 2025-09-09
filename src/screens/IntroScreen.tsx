import { StyleSheet, View } from 'react-native';
import React from 'react';
import LogoComponent from '../assets/LogoComponent';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <LogoComponent width={150} height={150} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    bottom: 50, 
    right: 50
  }
});
