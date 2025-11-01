// screens/HomeScreen.js
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import SectionTitle from '../components/SectionTitle';
import KeyValue from '../components/KeyValue';
import { MOCK } from '../data/mockData';
import { COLORS, FONTS, SIZES, components } from '../theme/theme';

export default function HomeScreen() {
  const { races, drivers, teams } = MOCK;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollPad}>
        <SectionTitle>F1 Simplified — Overview</SectionTitle>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Stats</Text>
          <KeyValue k="Races (sample)" v={races.length} />
          <KeyValue k="Drivers (sample)" v={drivers.length} />
          <KeyValue k="Teams (sample)" v={teams.length} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming / Recent Races</Text>
          {races.map((r) => (
            <View key={r.id} style={styles.listItem}>
              <Text style={styles.itemTitle}>{r.name}</Text>
              <Text style={styles.itemSub}>{r.circuit} — {r.date}</Text>
              <Text style={styles.small}>Winner: {r.winner} • Laps: {r.laps}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Top Drivers (sample)</Text>
          {drivers.slice(0, 3).map((d) => (
            <View key={d.id} style={styles.listItem}>
              <Text style={styles.itemTitle}>{d.name} #{d.number}</Text>
              <Text style={styles.itemSub}>{d.team} • {d.country}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollPad: {
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
  listItem: {
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  itemSub: {
    fontSize: 13,
    color: '#444',
    marginTop: 2,
  },
  small: {
    fontSize: 12,
    color: '#666',
    marginTop: 6,
  },
});
