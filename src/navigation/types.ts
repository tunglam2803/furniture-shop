import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps }    from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps }    from '@react-navigation/native';

// ─── Auth Stack ───────────────────────────────────────────────────────────────
export type AuthStackParamList = {
  Boarding:  undefined;
  Login:     undefined;
  Signup:    undefined;
};

// ─── Main Bottom Tab ──────────────────────────────────────────────────────────
export type MainTabParamList = {
  Home:     undefined;
  Favorite: undefined;
  Cart:     undefined;
  Profile:  undefined;
};

// ─── Root Navigator ───────────────────────────────────────────────────────────
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

// ─── Screen props helpers ─────────────────────────────────────────────────────
export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type TabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

// Augment global react-navigation types
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}