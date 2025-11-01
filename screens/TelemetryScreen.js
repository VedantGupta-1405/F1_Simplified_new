// screens/TelemetryScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import SectionTitle from '../components/SectionTitle';
import KeyValue from '../components/KeyValue';
import { MOCK } from '../data/mockData';
import { COLORS, FONTS, SIZES, components } from '../theme/theme';

export default function TelemetryScreen() {
  const { telemetrySamples } = MOCK;

  const renderTelemetry = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.driver} — {item.session}</Text>
      <KeyValue k="Speeds (kph)" v={item.speedKph.join(', ')} />
      <KeyValue k="Throttle (%)" v={item.throttlePercent.join(', ')} />
      <Text style={styles.small}>(Sample telemetry — expand with charts / graphs later)</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionTitle>Telemetry</SectionTitle>
      <FlatList
        data={telemetrySamples}
        renderItem={renderTelemetry}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.flatPad}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatPad: {
    padding: 12,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#f7f7f8',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  small: {
    fontSize: 12,
    color: '#666',
    marginTop: 6,
  },
});
