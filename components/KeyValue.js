// components/KeyValue.js
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, components } from '../theme/theme';

export default function KeyValue({ k, v }) {
  return (
    <View style={styles.kvRow}>
      <Text style={styles.kvKey}>{k}:</Text>
      <Text style={styles.kvVal}>{v}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kvRow: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'center',
  },
  kvKey: {
    width: 110,
    fontWeight: '600',
    fontSize: 13,
  },
  kvVal: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },
});
