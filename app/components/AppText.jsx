import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../styles/globalStyles';

export default function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
