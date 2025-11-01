// theme/theme.js
// F1-inspired design system with racing aesthetics

import { Platform, PixelRatio } from 'react-native';

const isAndroid = Platform.OS === 'android';

/* ---------------------------
   F1 COLOR PALETTE
   Inspired by Formula 1 branding
   --------------------------- */
export const COLORS = {
  // Primary F1 colors
  primary: '#E10600',          // F1 Red
  primaryDark: '#B00500',      // Darker red
  primaryLight: '#FF1E00',     // Bright red
  
  // Background & surfaces
  background: '#000000',       // Pure black
  surface: '#0A0A0A',          // Dark card background
  surfaceLight: '#151515',     // Lighter surface
  surfaceDark: '#000000',      // Darkest surface
  
  // Accent colors
  accent: '#00D9FF',           // Electric cyan
  accentSecondary: '#FF6B00',  // Orange
  gold: '#FFD700',             // Championship gold
  silver: '#C0C0C0',           // Silver medal
  bronze: '#CD7F32',           // Bronze medal
  
  // Text colors
  text: '#FFFFFF',
  textSoft: '#E8E8E8',
  textMuted: '#8E8E93',
  textDisabled: '#5E5E63',
  
  // Status colors
  success: '#00FF41',          // Green flag
  warning: '#FFD700',          // Yellow flag
  danger: '#FF0000',           // Red flag
  info: '#00D9FF',
  
  // Borders & dividers
  border: '#1A1A1A',
  borderLight: '#252525',
  divider: 'rgba(255, 255, 255, 0.08)',
  
  // Special effects
  glass: 'rgba(255, 255, 255, 0.05)',
  glassStrong: 'rgba(255, 255, 255, 0.1)',
  overlay: 'rgba(0, 0, 0, 0.7)',
  glow: 'rgba(225, 6, 0, 0.3)',
  
  // Gradients
  gradientDark: ['#15151E', '#0F0F16'],
  gradientRed: ['#E10600', '#B00500'],
  gradientCyan: ['#00D9FF', '#0099CC'],
};

/* ---------------------------
   SIZING SCALE
   --------------------------- */
export const SIZES = {
  // Base
  base: 8,
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
  
  // Radius
  radiusSmall: 8,
  radiusMedium: 12,
  radiusLarge: 16,
  radiusXL: 24,
  radiusPill: 999,
  
  // Typography
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  body: 16,
  bodySmall: 14,
  caption: 12,
  tiny: 10,
  
  // Spacing
  paddingScreen: 20,
  paddingCard: 16,
  marginSection: 24,
};

/* ---------------------------
   TYPOGRAPHY
   F1-inspired bold typography
   --------------------------- */
export const FONTS = {
  // Display
  hero: { 
    fontSize: SIZES.h1, 
    lineHeight: 40, 
    fontWeight: '900',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  
  // Headings
  h1: { 
    fontSize: SIZES.h1, 
    lineHeight: 40, 
    fontWeight: '800',
    letterSpacing: 1,
  },
  h2: { 
    fontSize: SIZES.h2, 
    lineHeight: 36, 
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  h3: { 
    fontSize: SIZES.h3, 
    lineHeight: 32, 
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  h4: { 
    fontSize: SIZES.h4, 
    lineHeight: 28, 
    fontWeight: '600',
  },
  
  // Body
  body: { 
    fontSize: SIZES.body, 
    lineHeight: 24, 
    fontWeight: '500',
  },
  bodyBold: { 
    fontSize: SIZES.body, 
    lineHeight: 24, 
    fontWeight: '700',
  },
  bodySmall: { 
    fontSize: SIZES.bodySmall, 
    lineHeight: 20, 
    fontWeight: '500',
  },
  
  // Small
  caption: { 
    fontSize: SIZES.caption, 
    lineHeight: 16, 
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  captionUppercase: { 
    fontSize: SIZES.caption, 
    lineHeight: 16, 
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  tiny: { 
    fontSize: SIZES.tiny, 
    lineHeight: 14, 
    fontWeight: '500',
  },
};

/* ---------------------------
   SHADOWS & ELEVATION
   --------------------------- */
const androidElevation = (elev = 6) => ({
  elevation: elev,
});

const iosShadow = (color = '#000', opacity = 0.3, radius = 10, offsetY = 6) => ({
  shadowColor: color,
  shadowOffset: { width: 0, height: offsetY },
  shadowOpacity: opacity,
  shadowRadius: radius,
});

export const SHADOWS = {
  none: {},
  subtle: isAndroid ? androidElevation(2) : iosShadow('#000', 0.1, 4, 2),
  medium: isAndroid ? androidElevation(4) : iosShadow('#000', 0.2, 8, 4),
  strong: isAndroid ? androidElevation(8) : iosShadow('#000', 0.3, 12, 6),
  glow: isAndroid ? androidElevation(12) : iosShadow(COLORS.primary, 0.4, 20, 8),
  glowCyan: isAndroid ? androidElevation(12) : iosShadow(COLORS.accent, 0.3, 16, 6),
};

/* ---------------------------
   COMPONENT STYLES
   Reusable F1-themed components
   --------------------------- */
export const components = {
  // Screen container
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  // Scrollable content container
  scrollContent: {
    padding: SIZES.paddingScreen,
    paddingBottom: 40,
  },
  
  // Cards
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.paddingCard,
    marginBottom: SIZES.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.medium,
  },
  
  cardHighlight: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusLarge,
    padding: SIZES.l,
    marginBottom: SIZES.m,
    borderWidth: 2,
    borderColor: COLORS.primary,
    ...SHADOWS.glow,
  },
  
  cardGlass: {
    backgroundColor: COLORS.glassStrong,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.paddingCard,
    marginBottom: SIZES.m,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    ...SHADOWS.medium,
  },
  
  // Section header
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.m,
    paddingBottom: SIZES.s,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  
  sectionTitle: {
    fontSize: SIZES.h3,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  
  // Buttons
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: SIZES.radiusPill,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.glow,
  },
  
  buttonPrimaryText: {
    color: COLORS.text,
    fontSize: SIZES.body,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  
  buttonSecondary: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: SIZES.radiusPill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonGhost: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: SIZES.radiusPill,
  },
  
  buttonGhostText: {
    color: COLORS.primary,
    fontSize: SIZES.bodySmall,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  
  // Pills & Badges
  pill: {
    backgroundColor: COLORS.glass,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: SIZES.radiusPill,
    alignSelf: 'flex-start',
  },
  
  pillText: {
    color: COLORS.textSoft,
    fontSize: SIZES.caption,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  
  badge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: SIZES.radiusSmall,
    minWidth: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  badgeText: {
    color: COLORS.text,
    fontSize: SIZES.tiny,
    fontWeight: '800',
  },
  
  // List items
  listItem: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.paddingCard,
    marginBottom: SIZES.s,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  
  listItemTitle: {
    fontSize: SIZES.body,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  
  listItemSubtitle: {
    fontSize: SIZES.bodySmall,
    color: COLORS.textMuted,
    lineHeight: 20,
  },
  
  // Stats display
  statBox: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.m,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  
  statValue: {
    fontSize: SIZES.h1,
    fontWeight: '900',
    color: COLORS.primary,
    letterSpacing: 1,
  },
  
  statLabel: {
    fontSize: SIZES.caption,
    fontWeight: '600',
    color: COLORS.textMuted,
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  // Dividers
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: SIZES.m,
  },
  
  dividerThick: {
    height: 2,
    backgroundColor: COLORS.primary,
    marginVertical: SIZES.m,
  },
  
  // Racing stripe accent
  racingStripe: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: COLORS.primary,
  },
  
  // Key-value row
  kvRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.s,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  
  kvKey: {
    fontSize: SIZES.bodySmall,
    fontWeight: '600',
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    flex: 1,
  },
  
  kvValue: {
    fontSize: SIZES.body,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'right',
    flex: 1,
  },
};

/* ---------------------------
   UTILITIES
   --------------------------- */
export function rgba(hex, alpha = 1) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function scaleFont(size) {
  const scale = PixelRatio.getFontScale();
  return Math.round(size * scale);
}

// Default export
const Theme = {
  COLORS,
  SIZES,
  FONTS,
  SHADOWS,
  components,
  rgba,
  scaleFont,
};

export default Theme;