import React from 'react';

import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../styles/colors';

function WelcomeScreen({ navigation }) {
  // console.log(navigation.navigate);
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/favicon.png')} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
