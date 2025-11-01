// screens/TeamsScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import SectionTitle from '../components/SectionTitle';
import { MOCK } from '../data/mockData';
import { COLORS, FONTS, SIZES, components } from '../theme/theme';

export default function TeamsScreen() {
  const { teams } = MOCK;

  const renderTeam = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemSub}>Base: {item.base}</Text>
      <Text style={styles.small}>Championships: {item.championships}</Text>
      <Text style={styles.small}>Drivers: {item.drivers.join(', ')}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionTitle>Teams</SectionTitle>
      <FlatList
        data={teams}
        renderItem={renderTeam}
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
