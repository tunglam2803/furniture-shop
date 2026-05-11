import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabParamList } from './types';
import colors from '../theme/colors';
import spacing from '../theme/spacing';

// ─── IMPORT HÀNG THẬT CỦA HUY Ở ĐÂY ─────────────────────────────────────────
import HomeScreen from '../screens/home/HomeScreen';
import FavoriteScreen from '../screens/home/FavoriteScreen';
// Nếu chưa có file thật cho Cart và Profile thì tạm thời để lại Placeholder
import { View } from 'react-native';

const Tab = createBottomTabNavigator<MainTabParamList>();

// Placeholder cho các màn chưa làm
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
    <Text style={{ fontSize: 22, color: colors.textPrimary }}>{name}</Text>
    <Text style={{ fontSize: 13, color: colors.textSecondary }}>Coming Soon...</Text>
  </View>
);

const CartScreen = () => <PlaceholderScreen name="Cart" />;
const ProfileScreen = () => <PlaceholderScreen name="Profile" />;

// ─── Tab icon component ──────────────────────────────────────────────────────
const TabIcon = ({ label, focused }: { label: string; focused: boolean }) => (
  <Text style={{ fontSize: 20, color: focused ? colors.primary : colors.textHint }}>
    {label}
  </Text>
);

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textHint,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} // <--- GIỜ NÓ ĐÃ GỌI FILE HomeScreen.tsx XỊN
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="⌂" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen} // <--- GIỜ NÓ ĐÃ GỌI FILE FavoriteScreen.tsx XỊN
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="♡" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="⊡" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="◯" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    height: 64,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xs,
  },
  tabLabel: { fontSize: 11 },
});