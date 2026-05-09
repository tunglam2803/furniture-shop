import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import AppText from './AppText';
import colors  from '../../theme/colors';
import { layout } from '../../theme/spacing';

// ─── Props ────────────────────────────────────────────────────────────────────
type Variant = 'primary' | 'outline' | 'ghost';

interface AppButtonProps {
  label:      string;
  onPress:    () => void;
  variant?:   Variant;
  loading?:   boolean;
  disabled?:  boolean;
  fullWidth?: boolean;
  style?:     ViewStyle;
  textStyle?: TextStyle;
}

// ─── Component ────────────────────────────────────────────────────────────────
export const AppButton: React.FC<AppButtonProps> = ({
  label,
  onPress,
  variant   = 'primary',
  loading   = false,
  disabled  = false,
  fullWidth = true,
  style,
  textStyle,
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.base,
        styles[variant],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.white : colors.primary}
          size="small"
        />
      ) : (
        <AppText
          variant="button"
          color={
            variant === 'primary' ? colors.textWhite : colors.textPrimary
          }
          align="center"
          style={textStyle}
        >
          {label}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  base: {
    height:         layout.buttonHeight,
    borderRadius:   layout.borderRadius.md,
    justifyContent: 'center',
    alignItems:     'center',
    paddingHorizontal: 24,
  },
  fullWidth: {
    width: '100%',
  },
  // Variants
  primary: {
    backgroundColor: colors.primary,
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth:     1.5,
    borderColor:     colors.primary,
  },
  ghost: {
    backgroundColor: colors.transparent,
  },
  // State
  disabled: {
    opacity: 0.45,
  },
});

export default AppButton;