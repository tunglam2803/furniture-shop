import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer }     from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';
import AuthStack from './AuthStack';
import MainTab   from './MainTab';
import colors    from '../theme/colors';

const Root = createNativeStackNavigator<RootStackParamList>();

// ─── Root Navigator ───────────────────────────────────────────────────────────
// Checks auth state → shows AuthStack or MainTab accordingly
//
// TODO: Replace `isAuthenticated` with authStore selector
//   import { useAuthStore } from '../store/authStore';
//   const isAuthenticated = useAuthStore(s => s.token !== null);

export default function RootNavigator() {
  const [loading, setLoading]               = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  // Simulate checking stored auth token on app start
  useEffect(() => {
    async function bootstrap() {
      try {
        // TODO: const token = await SecureStore.getItemAsync('auth_token');
        // setAuthenticated(!!token);
        await new Promise(r => setTimeout(r, 500)); // simulate async check
        setAuthenticated(false); // default: not logged in
      } finally {
        setLoading(false);
      }
    }
    bootstrap();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Root.Screen name="Main" component={MainTab} />
        ) : (
          <Root.Screen name="Auth" component={AuthStack} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
}