import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    // SafeAreaView only works for ios, use the value of Constants.statusBarHeight
    // to apply a padding top for android
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
