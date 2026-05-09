import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ViewStyle,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors  from '../../theme/colors';
import spacing from '../../theme/spacing';

// ─── Props ────────────────────────────────────────────────────────────────────
interface SafeScreenProps {
  children:      React.ReactNode;
  style?:        ViewStyle;
  scrollable?:   boolean;
  dark?:         boolean;       // True for Boarding (dark bg)
  paddingH?:     boolean;       // Apply horizontal padding
  avoidKeyboard?: boolean;      // Wrap with KeyboardAvoidingView
}

// ─── Component ────────────────────────────────────────────────────────────────
export const SafeScreen: React.FC<SafeScreenProps> = ({
  children,
  style,
  scrollable   = false,
  dark         = false,
  paddingH     = true,
  avoidKeyboard = false,
}) => {
  const bg = dark ? colors.boarding : colors.background;

  const Inner = scrollable ? (
    <ScrollView
      contentContainerStyle={[
        styles.scroll,
        paddingH && styles.paddingH,
        style,
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.fill, paddingH && styles.paddingH, style]}>
      {children}
    </View>
  );

  const content = avoidKeyboard ? (
    <KeyboardAvoidingView
      style={styles.fill}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {Inner}
    </KeyboardAvoidingView>
  ) : Inner;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={bg}
      />
      {content}
    </SafeAreaView>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  fill: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  paddingH: {
    paddingHorizontal: spacing.base * 1.5, // 24px — matches Figma margins
  },
});

export default SafeScreen;