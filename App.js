import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavigationTheme from './app/components/navigation/NavigationTheme';
import AppNavigator from './app/components/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
