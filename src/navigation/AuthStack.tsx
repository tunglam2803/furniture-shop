import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList }    from './types';

import BoardingScreen from '../screens/auth/BoardingScreen';
import LoginScreen    from '../screens/auth/LoginScreen';
import SignupScreen   from '../screens/auth/SignupScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

// ─── Auth Stack ───────────────────────────────────────────────────────────────
// Boarding → Login → Signup (no header, slide animation)
export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Boarding"
      screenOptions={{
        headerShown:  false,
        animation:    'slide_from_right',
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Boarding" component={BoardingScreen} />
      <Stack.Screen name="Login"    component={LoginScreen} />
      <Stack.Screen name="Signup"   component={SignupScreen} />
    </Stack.Navigator>
  );
}