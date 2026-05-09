import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import type { AuthScreenProps } from '../../navigation/types';
import SafeScreen from '../../components/shared/SafeScreen';
import AppText    from '../../components/shared/AppText';
import AppButton  from '../../components/shared/AppButton';
import AppInput   from '../../components/shared/AppInput';
import colors     from '../../theme/colors';
import spacing    from '../../theme/spacing';

// ─── Signup Screen ────────────────────────────────────────────────────────────
// Figma: "WELCOME" heading, name / email / password / confirm fields,
//        "SIGN UP" black button, "Log In" footer link

type Props = AuthScreenProps<'Signup'>;

interface FormState {
  name:            string;
  email:           string;
  password:        string;
  confirmPassword: string;
}
interface FormErrors {
  name?:            string;
  email?:           string;
  password?:        string;
  confirmPassword?: string;
}

export default function SignupScreen({ navigation }: Props) {
  const [form,    setForm]    = useState<FormState>({
    name: '', email: '', password: '', confirmPassword: '',
  });
  const [errors,  setErrors]  = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // ── Validation ──
  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim())
      e.name = 'Full name is required';
    if (!form.email.trim())
      e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Enter a valid email';
    if (!form.password)
      e.password = 'Password is required';
    else if (form.password.length < 6)
      e.password = 'Minimum 6 characters';
    if (form.confirmPassword !== form.password)
      e.confirmPassword = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit ──
  async function handleSignup() {
    if (!validate()) return;
    setLoading(true);
    try {
      // TODO: connect to auth API
      await new Promise(r => setTimeout(r, 1200));
      // On success → navigate to Main
      // navigation.replace('Main');
    } finally {
      setLoading(false);
    }
  }

  const setField = (field: keyof FormState) =>
    (value: string) => setForm(f => ({ ...f, [field]: value }));

  return (
    <SafeScreen scrollable avoidKeyboard>
      <StatusBar style="dark" />

      {/* ── Back ── */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <AppText variant="bodySmall" color={colors.textSecondary}>← Back</AppText>
      </TouchableOpacity>

      {/* ── Header ── */}
      <View style={styles.header}>
        <AppText variant="bodySmall" color={colors.textSecondary} style={styles.label}>
          Create account
        </AppText>
        <AppText variant="authGreeting">Welcome</AppText>
      </View>

      {/* ── Form ── */}
      <View style={styles.form}>
        <AppInput
          label="Full Name"
          placeholder="John Doe"
          autoCapitalize="words"
          value={form.name}
          onChangeText={setField('name')}
          error={errors.name}
        />

        <AppInput
          label="Email"
          placeholder="your@email.com"
          keyboardType="email-address"
          value={form.email}
          onChangeText={setField('email')}
          error={errors.email}
        />

        <AppInput
          label="Password"
          placeholder="••••••••"
          value={form.password}
          onChangeText={setField('password')}
          error={errors.password}
          showPasswordToggle
          secureTextEntry
        />

        <AppInput
          label="Confirm Password"
          placeholder="••••••••"
          value={form.confirmPassword}
          onChangeText={setField('confirmPassword')}
          error={errors.confirmPassword}
          showPasswordToggle
          secureTextEntry
        />
      </View>

      {/* ── Terms note ── */}
      <AppText variant="caption" color={colors.textSecondary} style={styles.terms}>
        By signing up, you agree to our{' '}
        <AppText variant="caption" style={styles.termsLink}>
          Terms of Service
        </AppText>
        {' '}and{' '}
        <AppText variant="caption" style={styles.termsLink}>
          Privacy Policy
        </AppText>
      </AppText>

      {/* ── CTA ── */}
      <AppButton
        label="Sign Up"
        onPress={handleSignup}
        loading={loading}
        style={styles.signupBtn}
      />

      {/* ── Login footer ── */}
      <View style={styles.footer}>
        <AppText variant="bodySmall" color={colors.textSecondary}>
          Already have an account?{'  '}
        </AppText>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <AppText variant="bodySmall" style={styles.loginLink}>
            Log In
          </AppText>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  backBtn: {
    marginTop:    spacing.base,
    marginBottom: spacing.base,
    alignSelf:    'flex-start',
  },
  header: {
    marginBottom: spacing.xl,
    marginTop:    spacing.base,
  },
  label: {
    marginBottom: spacing.xs,
    fontSize:     16,
  },
  form: {
    marginBottom: spacing.sm,
  },
  terms: {
    marginBottom: spacing.xl,
    lineHeight:   18,
  },
  termsLink: {
    fontWeight:         '600',
    textDecorationLine: 'underline',
    color:              colors.textPrimary,
  },
  signupBtn: {
    marginBottom: spacing.lg,
  },
  footer: {
    flexDirection:  'row',
    justifyContent: 'center',
    alignItems:     'center',
    paddingBottom:  spacing.xl,
  },
  loginLink: {
    fontWeight:         '600',
    textDecorationLine: 'underline',
  },
});