// screens/DriversScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import SectionTitle from '../components/SectionTitle';
import { MOCK } from '../data/mockData';
import { COLORS, FONTS, SIZES, components } from '../theme/theme';

export default function DriversScreen() {
  const { drivers } = MOCK;

  const renderDriver = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemTitle}>{item.name} #{item.number}</Text>
      <Text style={styles.itemSub}>{item.team}</Text>
      <Text style={styles.small}>{item.country}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionTitle>Drivers</SectionTitle>
      <FlatList
        data={drivers}
        renderItem={renderDriver}
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
