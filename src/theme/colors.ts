// ─── Colors — Furniture App (Minimal) ────────────────────────────────────────
// Extracted from Figma: background #1E1E1E, white, clean grays

const colors = {
  // Primary
  primary:       '#1E1E1E',   // Near-black — CTA buttons, headings
  primaryLight:  '#3A3A3A',   // Hover / pressed state

  // Background
  background:    '#FFFFFF',
  backgroundAlt: '#F7F7F7',   // Input backgrounds, cards
  boarding:      '#1E1E1E',   // Boarding screen dark bg

  // Text
  textPrimary:   '#1E1E1E',
  textSecondary: '#888888',
  textHint:      '#BBBBBB',
  textWhite:     '#FFFFFF',
  textLink:      '#1E1E1E',

  // Input / Border
  inputBg:       '#F5F5F5',
  inputBorder:   '#E8E8E8',
  inputBorderFocus: '#1E1E1E',

  // Status
  error:         '#E53935',
  success:       '#43A047',
  warning:       '#FB8C00',

  // Utility
  divider:       '#EEEEEE',
  overlay:       'rgba(0,0,0,0.45)',
  transparent:   'transparent',
  white:         '#FFFFFF',
  black:         '#000000',
};

export default colors;
export type ColorKey = keyof typeof colors;