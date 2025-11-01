// theme.js
// Central design system for your app (colors, sizes, fonts, reusable styles)
//
// Usage examples:
// import { COLORS, SIZES, FONTS, SHADOWS, components } from './theme/theme';
// <View style={[styles.card, components.card]} />

import { Platform, PixelRatio } from 'react-native';

const isAndroid = Platform.OS === 'android';

/* ---------------------------
   COLOR PALETTE
   Thoughtful F1-inspired palette: deep carbon, F1 red,
   warm accents, and neutrals for good contrast.
   --------------------------- */
export const COLORS = {
  // primary
  primary: '#e10600',       // F1 red (accent)
  primaryDark: '#b00b00',
  accent: '#FFD24C',        // warm gold accent

  // background & surfaces
  background: '#070707',    // almost black
  surface: '#121212',       // main card background
  surfaceSoft: '#1A1A1A',   // slightly lighter card
  border: '#232323',

  // text
  text: '#FFFFFF',
  textSoft: '#E6E6E6',
  muted: '#9B9B9B',

  // success / warning / error
  success: '#2ECC71',
  warning: '#FF9F1C',
  danger: '#FF4C4C',

  // subtle UI colors
  glass: 'rgba(255,255,255,0.04)',
  overlay: 'rgba(0,0,0,0.45)',

  // gradient stops (for optional gradient components)
  gradientStart: '#0b0b0b',
  gradientEnd: '#1a1a1a',
};

/* ---------------------------
   SIZING SCALE
   A responsive-ish scale for paddings, radii, etc.
   --------------------------- */
export const SIZES = {
  base: 8,
  s: 4,
  m: 12,
  l: 20,
  xl: 28,
  radius: 14,
  // screen / typography baseline (you can customize per device if desired)
  h1: 34,
  h2: 28,
  h3: 22,
  body: 16,
  caption: 12,
  small: 10,
};

/* ---------------------------
   TYPOGRAPHY
   Use a bold/semibold/light mapping. If you add custom fonts (expo-font),
   match the fontFamily names below.
   --------------------------- */
export const FONTS = {
  largeTitle: { fontSize: SIZES.h1, lineHeight: 42, fontWeight: '800' },
  title: { fontSize: SIZES.h2, lineHeight: 36, fontWeight: '700' },
  headline: { fontSize: SIZES.h3, lineHeight: 30, fontWeight: '700' },
  body: { fontSize: SIZES.body, lineHeight: 22, fontWeight: '500' },
  callout: { fontSize: 14, lineHeight: 20, fontWeight: '600' },
  caption: { fontSize: SIZES.caption, lineHeight: 16, fontWeight: '500' },
  small: { fontSize: SIZES.small, lineHeight: 14, fontWeight: '400' },
};

/* ---------------------------
   SHADOW / ELEVATION
   Cross-platform helpers. Use ...SHADOWS.md for React Native shadow.
   --------------------------- */
const androidElevation = (elev = 6) => ({
  elevation: elev,
});

const iosShadow = (color = '#000', opacity = 0.18, radius = 10, offsetY = 6) => ({
  shadowColor: color,
  shadowOffset: { width: 0, height: offsetY },
  shadowOpacity: opacity,
  shadowRadius: radius,
});

export const SHADOWS = {
  subtle: isAndroid ? androidElevation(2) : iosShadow('#000', 0.06, 6, 3),
  soft: isAndroid ? androidElevation(4) : iosShadow('#000', 0.12, 8, 4),
  strong: isAndroid ? androidElevation(8) : iosShadow('#000', 0.2, 14, 8),
};

/* ---------------------------
   RADIUS / BORDER HELPERS
   --------------------------- */
export const RADIUS = {
  sm: 8,
  md: 14,
  lg: 22,
  pill: 999,
};

/* ---------------------------
   COMPONENT STYLES
   Reusable component style objects to keep screens consistent.
   These are plain objects suitable for spreading into style arrays.
   --------------------------- */
export const components = {
  // Main app container for screens
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.m,
  },

  // Card style used across the app
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SIZES.m,
    borderColor: COLORS.border,
    borderWidth: 1,
    ...SHADOWS.soft,
  },

  // Elevated floating card (e.g., small status)
  floatingCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    paddingVertical: SIZES.s,
    paddingHorizontal: SIZES.m,
    ...SHADOWS.strong,
  },

  // Primary CTA (button) - variant
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: RADIUS.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimaryText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },

  // Ghost button (outline)
  buttonGhost: {
    backgroundColor: 'transparent',
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: RADIUS.lg,
  },
  buttonGhostText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 15,
  },

  // Small muted pill (labels / chips)
  pill: {
    backgroundColor: COLORS.glass,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  pillText: {
    color: COLORS.textSoft,
    fontSize: 12,
    fontWeight: '600',
  },

  // List item row
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.s,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    width: '100%',
  },
};

/* ---------------------------
   UTILS
   Helpful small helpers that you can import anywhere
   --------------------------- */
export function rgba(hex, alpha = 1) {
  // simple hex to rgba helper (#rrggbb)
  const h = hex.replace('#', '');
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function scaleFont(size) {
  // lightweight font scaling for pixel density (tweak if desired)
  const scale = PixelRatio.getFontScale();
  return Math.round(size * scale);
}

/* ---------------------------
   DEFAULT EXPORT (for convenience)
   You can import the whole theme as default or named imports above.
   --------------------------- */
const Theme = {
  COLORS,
  SIZES,
  FONTS,
  SHADOWS,
  RADIUS,
  components,
  rgba,
  scaleFont,
};

export default Theme;
