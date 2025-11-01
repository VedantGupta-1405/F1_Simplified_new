// components/SectionTitle.js
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../theme/theme';

export default function SectionTitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.m,
    paddingBottom: SIZES.s,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.text,
    fontWeight: '900',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  accent: {
    width: 40,
    height: 3,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.s,
    borderRadius: 2,
  },
});