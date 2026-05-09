import { Platform } from 'react-native';

// ─── Typography — Furniture App ───────────────────────────────────────────────
// Font: System (SF Pro on iOS / Roboto on Android) — matches Figma minimal style

export const fontFamily = {
  regular:  Platform.OS === 'ios' ? 'System' : 'sans-serif',
  medium:   Platform.OS === 'ios' ? 'System' : 'sans-serif-medium',
  bold:     Platform.OS === 'ios' ? 'System' : 'sans-serif',
};

export const fontSize = {
  xs:   11,
  sm:   13,
  base: 15,
  md:   17,
  lg:   20,
  xl:   24,
  xxl:  28,
  huge: 36,
};

export const fontWeight = {
  regular: '400' as const,
  medium:  '500' as const,
  semiBold:'600' as const,
  bold:    '700' as const,
};

export const lineHeight = {
  tight:  1.2,
  normal: 1.5,
  relaxed:1.75,
};

// Pre-built text styles — match Figma text layers
const typography = {
  // Boarding
  boardingTitle: {
    fontSize:   fontSize.xxl,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.xxl * 1.3,
    letterSpacing: 0.2,
  },
  boardingSubtitle: {
    fontSize:   fontSize.base,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.base * 1.6,
  },

  // Auth
  authGreeting: {
    fontSize:   fontSize.xxl,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.xxl * 1.2,
  },
  authLabel: {
    fontSize:   fontSize.sm,
    fontWeight: fontWeight.medium,
  },
  authLink: {
    fontSize:   fontSize.sm,
    fontWeight: fontWeight.medium,
    textDecorationLine: 'underline' as const,
  },

  // Body
  body:     { fontSize: fontSize.base, fontWeight: fontWeight.regular },
  bodySmall:{ fontSize: fontSize.sm,   fontWeight: fontWeight.regular },
  caption:  { fontSize: fontSize.xs,   fontWeight: fontWeight.regular },

  // Button
  button:   { fontSize: fontSize.base, fontWeight: fontWeight.semiBold, letterSpacing: 0.5 },

  // Heading
  h1: { fontSize: fontSize.huge, fontWeight: fontWeight.bold },
  h2: { fontSize: fontSize.xxl,  fontWeight: fontWeight.bold },
  h3: { fontSize: fontSize.xl,   fontWeight: fontWeight.semiBold },
  h4: { fontSize: fontSize.md,   fontWeight: fontWeight.semiBold },
};

export default typography;