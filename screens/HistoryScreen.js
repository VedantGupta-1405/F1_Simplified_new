// screens/HistoryScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import SectionTitle from '../components/SectionTitle';
import { MOCK } from '../data/mockData';
import { COLORS, FONTS, SIZES, components } from '../theme/theme';

export default function HistoryScreen() {
  const { history } = MOCK;

  const renderHistory = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemTitle}>Season {item.season}</Text>
      <Text style={styles.itemSub}>Champion: {item.champion} ({item.team})</Text>
      <Text style={styles.small}>Races: {item.races}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionTitle>History</SectionTitle>
      <FlatList
        data={history}
        renderItem={renderHistory}
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
