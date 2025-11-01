// components/KeyValue.js
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../theme/theme';

export default function KeyValue({ k, v }) {
  return (
    <View style={styles.container}>
      <Text style={styles.key}>{k}</Text>
      <Text style={styles.value}>{v}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.s,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  key: {
    ...FONTS.bodySmall,
    color: COLORS.textMuted,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    flex: 1,
  },
  value: {
    ...FONTS.body,
    color: COLORS.text,
    fontWeight: '700',
    textAlign: 'right',
    flex: 1,
  },
});