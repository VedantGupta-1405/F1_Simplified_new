// components/SectionTitle.js
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, components } from '../theme/theme';

export default function SectionTitle({ children }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    margin: 12,
    marginLeft: 18,
  },
});
