import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabParamList }    from './types';
import colors  from '../theme/colors';
import spacing from '../theme/spacing';

const Tab = createBottomTabNavigator<MainTabParamList>();

// ─── Placeholder screens (Dev B & C will replace these) ───────────────────────
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={ph.root}>
    <Text style={ph.text}>{name}</Text>
    <Text style={ph.sub}>Dev B / Dev C will implement this screen</Text>
  </View>
);
const HomeScreen     = () => <PlaceholderScreen name="Home" />;
const FavoriteScreen = () => <PlaceholderScreen name="Favorite" />;
const CartScreen     = () => <PlaceholderScreen name="Cart" />;
const ProfileScreen  = () => <PlaceholderScreen name="Profile" />;

const ph = StyleSheet.create({
  root:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor: colors.background },
  text:{ fontSize:22, fontWeight:'600', color: colors.textPrimary, marginBottom: 8 },
  sub: { fontSize:13, color: colors.textSecondary, textAlign:'center', paddingHorizontal:32 },
});

// ─── Tab icons (text-based — swap with react-native-vector-icons) ─────────────
type IconProps = { focused: boolean };

const TabIcon = ({ label, focused }: { label: string; focused: boolean }) => (
  <Text style={{
    fontSize: 20,
    color: focused ? colors.primary : colors.textHint,
  }}>
    {label}
  </Text>
);

// ─── Main Tab Navigator ───────────────────────────────────────────────────────
export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor:   colors.primary,
        tabBarInactiveTintColor: colors.textHint,
        tabBarLabelStyle: styles.tabLabel,
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="⌂"  focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="♡"  focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="⊡"  focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="◯"  focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor:  colors.white,
    borderTopColor:   colors.divider,
    borderTopWidth:   1,
    height:           64,
    paddingBottom:    spacing.sm,
    paddingTop:       spacing.xs,
  },
  tabLabel: {
    fontSize: 11,
  },
});