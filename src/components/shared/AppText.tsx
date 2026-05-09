import React from 'react';
import { Text, TextStyle, StyleSheet, TextProps } from 'react-native';
import typography from '@theme/typography'; 
import colors from '@theme/colors';

// ─── Variants map (mirrors Figma text styles) ─────────────────────────────────
type Variant =
  | 'boardingTitle' | 'boardingSubtitle'
  | 'authGreeting'  | 'authLabel' | 'authLink'
  | 'h1' | 'h2' | 'h3' | 'h4'
  | 'body' | 'bodySmall' | 'caption' | 'button';

interface AppTextProps extends TextProps {
  variant?: Variant;
  color?:   string;
  align?:   TextStyle['textAlign'];
  children: React.ReactNode;
  style?:   TextStyle | TextStyle[];
}

export const AppText: React.FC<AppTextProps> = ({
  variant  = 'body',
  color,
  align,
  children,
  style,
  ...rest
}) => {
  const variantStyle = typography[variant] as TextStyle;

  return (
    <Text
      style={[
        styles.base,
        variantStyle,
        color  ? { color }                : undefined,
        align  ? { textAlign: align }     : undefined,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: colors.textPrimary,
    includeFontPadding: false,
  },
});

export default AppText;