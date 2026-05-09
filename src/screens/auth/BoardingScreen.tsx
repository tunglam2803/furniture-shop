import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StatusBar }   from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import type { AuthScreenProps } from '../../navigation/types';
import AppText    from '../../components/shared/AppText';
import AppButton  from '../../components/shared/AppButton';
import colors     from '../../theme/colors';
import spacing    from '../../theme/spacing';
import { SCREEN_H } from '../../theme/spacing';

// ─── Boarding Screen ──────────────────────────────────────────────────────────
// Figma: Full-screen furniture photo, dark overlay,
//        "MAKE YOUR HOME BEAUTIFUL", tagline, "Get Started" black btn, "Sign Up" link

type Props = AuthScreenProps<'Boarding'>;

export default function BoardingScreen({ navigation }: Props) {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />

      {/* Hero image — replace uri with local asset when available */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800' }}
        style={styles.image}
        resizeMode="cover"
      >
        {/* Dark gradient overlay */}
        <LinearGradient
          colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.80)']}
          style={styles.gradient}
        />

        {/* Content */}
        <View style={styles.content}>
          {/* Tag line */}
          <AppText
            variant="bodySmall"
            color="rgba(255,255,255,0.65)"
            style={styles.tag}
          >
            FURNITURE SHOP
          </AppText>

          {/* Main headline — matches Figma "MAKE YOUR HOME BEAUTIFUL" */}
          <AppText
            variant="h2"
            color={colors.textWhite}
            style={styles.headline}
          >
            Make Your{'\n'}Home Beautiful
          </AppText>

          {/* Sub tagline */}
          <AppText
            variant="boardingSubtitle"
            color="rgba(255,255,255,0.70)"
            style={styles.subtitle}
          >
            The best simple place where you{'\n'}
            discover most wonderful furniture
          </AppText>

          {/* CTA */}
          <AppButton
            label="Get Started"
            onPress={() => navigation.navigate('Login')}
            style={styles.ctaBtn}
          />

          {/* Sign up link */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <AppText
              variant="bodySmall"
              color="rgba(255,255,255,0.75)"
              align="center"
              style={styles.signupLink}
            >
              Don't have an account?{' '}
              <AppText
                variant="bodySmall"
                color={colors.white}
                style={styles.signupBold}
              >
                Sign up
              </AppText>
            </AppText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.boarding,
  },
  image: {
    flex: 1,
    width: '100%',
    height: SCREEN_H,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex:              1,
    justifyContent:    'flex-end',
    paddingHorizontal: spacing.base * 1.5,
    paddingBottom:     spacing.xxl + spacing.base,
  },
  tag: {
    letterSpacing: 2,
    marginBottom:  spacing.md,
  },
  headline: {
    lineHeight:   38,
    marginBottom: spacing.md,
  },
  subtitle: {
    marginBottom: spacing.xl + spacing.md,
    lineHeight:   22,
  },
  ctaBtn: {
    marginBottom: spacing.lg,
    backgroundColor: colors.white,  // White button on dark bg
  },
  signupLink: {
    textAlign: 'center',
  },
  signupBold: {
    fontWeight: '600',
  },
});