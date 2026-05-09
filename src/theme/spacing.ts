import { Dimensions } from 'react-native';

export const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

// ─── Spacing ─────────────────────────────────────────────────────────────────
// Base unit = 4px (matches Figma 8pt grid)
const spacing = {
  xxs:  2,
  xs:   4,
  sm:   8,
  md:   12,
  base: 16,
  lg:   20,
  xl:   24,
  xxl:  32,
  huge: 48,
  mega: 64,
};

export default spacing;

// ─── Layout ───────────────────────────────────────────────────────────────────
export const layout = {
  screenPaddingH:    24,   // Horizontal padding on all screens
  screenPaddingV:    24,   // Vertical padding on all screens
  inputHeight:       52,   // Height of text inputs (from Figma)
  buttonHeight:      52,   // Height of primary buttons (from Figma)
  borderRadius:      {
    sm:   6,
    md:   10,
    lg:   16,
    full: 9999,
  },
};

export const shadow = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 10,
    elevation: 5,
  },
};