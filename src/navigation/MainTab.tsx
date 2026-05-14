import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import type { MainTabParamList } from './types';
import colors from '../theme/colors';
import spacing from '../theme/spacing';

// ─── IMPORT HÀNG THẬT CỦA HUY Ở ĐÂY ─────────────────────────────────────────
import HomeScreen from '../screens/home/HomeScreen';
import FavoriteScreen from '../screens/home/FavoriteScreen';
import CartScreen from '../screens/commerce/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

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
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={24} 
              color={focused ? colors.primary : colors.textHint}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "heart" : "heart-outline"} 
              size={24} 
              color={focused ? colors.primary : colors.textHint}
            />
          ),
          tabBarLabel: "Favorite",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "bag" : "bag-outline"} 
              size={24} 
              color={focused ? colors.primary : colors.textHint}
            />
          ),
          tabBarLabel: "Cart",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={24} 
              color={focused ? colors.primary : colors.textHint}
            />
          ),
          tabBarLabel: "Profile",
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