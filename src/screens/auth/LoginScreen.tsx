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

// ─── Login Screen ─────────────────────────────────────────────────────────────
// Figma: "Hello! Welcome Back" heading, email + password inputs,
//        "Forgot Password?" link, "Log In" black button, "Sign Up" footer

type Props = AuthScreenProps<'Login'>;

interface FormState {
  email:    string;
  password: string;
}
interface FormErrors {
  email?:    string;
  password?: string;
}

export default function LoginScreen({ navigation }: Props) {
  const [form,    setForm]    = useState<FormState>({ email: '', password: '' });
  const [errors,  setErrors]  = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // ── Validation ──
  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.email.trim())
      e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Enter a valid email';
    if (!form.password)
      e.password = 'Password is required';
    else if (form.password.length < 6)
      e.password = 'Minimum 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit ──
  async function handleLogin() {
    if (!validate()) return;
    setLoading(true);
    try {
      // TODO: connect to auth API / authStore
      await new Promise(r => setTimeout(r, 1200)); // mock delay
      // On success → navigate to Main
<<<<<<< Updated upstream
      // @ts-ignore
navigation.getParent()?.navigate('Main');
      ;
=======
      //navigation.replace('Main');
>>>>>>> Stashed changes
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeScreen scrollable avoidKeyboard>
      <StatusBar style="dark" />

      {/* ── Back button ── */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <AppText variant="bodySmall" color={colors.textSecondary}>← Back</AppText>
      </TouchableOpacity>

      {/* ── Greeting ── */}
      <View style={styles.header}>
        <AppText variant="bodySmall" color={colors.textSecondary} style={styles.hello}>
          Hello!
        </AppText>
        <AppText variant="authGreeting">Welcome Back</AppText>
      </View>

      {/* ── Form ── */}
      <View style={styles.form}>
        <AppInput
          label="Email"
          placeholder="your@email.com"
          keyboardType="email-address"
          value={form.email}
          onChangeText={t => setForm(f => ({ ...f, email: t }))}
          error={errors.email}
        />

        <AppInput
          label="Password"
          placeholder="••••••••"
          value={form.password}
          onChangeText={t => setForm(f => ({ ...f, password: t }))}
          error={errors.password}
          showPasswordToggle
          secureTextEntry
        />

        {/* Forgot password */}
        <TouchableOpacity
          onPress={() => { /* TODO: ForgotPassword screen */ }}
          style={styles.forgotRow}
        >
          <AppText variant="authLink" color={colors.textSecondary}>
            Forgot Password?
          </AppText>
        </TouchableOpacity>
      </View>

      {/* ── CTA ── */}
      <AppButton
        label="Log In"
        onPress={handleLogin}
        loading={loading}
        style={styles.loginBtn}
      />

      {/* ── Divider ── */}
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <AppText variant="caption" color={colors.textHint} style={styles.dividerText}>
          OR
        </AppText>
        <View style={styles.dividerLine} />
      </View>

      {/* ── Social buttons (placeholder) ── */}
      <AppButton
        label="Continue with Google"
        onPress={() => {}}
        variant="outline"
        style={styles.socialBtn}
      />

      {/* ── Sign up footer ── */}
      <View style={styles.footer}>
        <AppText variant="bodySmall" color={colors.textSecondary}>
          Don't have an account?{'  '}
        </AppText>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <AppText variant="bodySmall" style={styles.signupLink}>
            Sign Up
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
    marginBottom: spacing.xxl,
    marginTop:    spacing.base,
  },
  hello: {
    marginBottom: spacing.xs,
    fontSize:     16,
  },
  form: {
    marginBottom: spacing.base,
  },
  forgotRow: {
    alignSelf: 'flex-end',
    marginTop: -spacing.sm,
  },
  loginBtn: {
    marginBottom: spacing.lg,
  },
  dividerRow: {
    flexDirection:  'row',
    alignItems:     'center',
    marginBottom:   spacing.lg,
  },
  dividerLine: {
    flex:            1,
    height:          1,
    backgroundColor: colors.divider,
  },
  dividerText: {
    marginHorizontal: spacing.md,
  },
  socialBtn: {
    marginBottom: spacing.xl,
  },
  footer: {
    flexDirection:  'row',
    justifyContent: 'center',
    alignItems:     'center',
    paddingBottom:  spacing.base,
  },
  signupLink: {
    fontWeight:          '600',
    textDecorationLine:  'underline',
  },
});