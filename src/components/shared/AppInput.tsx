import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import AppText  from './AppText';
import colors   from '../../theme/colors';
import { layout, fontSize } from '../../theme/spacing';
import typography from '../../theme/typography';

// ─── Props ────────────────────────────────────────────────────────────────────
interface AppInputProps extends TextInputProps {
  label?:        string;
  error?:        string;
  hint?:         string;
  containerStyle?: ViewStyle;
  showPasswordToggle?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────
export const AppInput: React.FC<AppInputProps> = ({
  label,
  error,
  hint,
  containerStyle,
  showPasswordToggle = false,
  secureTextEntry,
  style,
  ...rest
}) => {
  const [focused,  setFocused]  = useState(false);
  const [hidden,   setHidden]   = useState(secureTextEntry ?? false);

  const borderColor = error
    ? colors.error
    : focused
    ? colors.inputBorderFocus
    : colors.inputBorder;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Label */}
      {label && (
        <AppText variant="authLabel" style={styles.label}>
          {label}
        </AppText>
      )}

      {/* Input row */}
      <View style={[styles.inputWrapper, { borderColor }]}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.textHint}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoCorrect={false}
          {...rest}
        />

        {/* Show/hide password icon */}
        {showPasswordToggle && (
          <TouchableOpacity
            onPress={() => setHidden(h => !h)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={styles.eyeBtn}
          >
            <AppText variant="bodySmall" color={colors.textSecondary}>
              {hidden ? 'Show' : 'Hide'}
            </AppText>
          </TouchableOpacity>
        )}
      </View>

      {/* Error / Hint */}
      {error ? (
        <AppText variant="caption" color={colors.error} style={styles.msg}>
          {error}
        </AppText>
      ) : hint ? (
        <AppText variant="caption" color={colors.textSecondary} style={styles.msg}>
          {hint}
        </AppText>
      ) : null}
    </View>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    color: colors.textPrimary,
  },
  inputWrapper: {
    flexDirection:   'row',
    alignItems:      'center',
    height:          layout.inputHeight,
    borderRadius:    layout.borderRadius.md,
    borderWidth:     1,
    backgroundColor: colors.inputBg,
    paddingHorizontal: 16,
  },
  input: {
    flex:     1,
    height:   '100%',
    color:    colors.textPrimary,
    fontSize: 15,
    fontWeight: '400',
  },
  eyeBtn: {
    paddingLeft: 10,
  },
  msg: {
    marginTop: 4,
    marginLeft: 2,
  },
});

export default AppInput;