// screens/DriversScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import { MOCK } from '../data/mockData';
import { COLORS, SIZES, FONTS, SHADOWS } from '../theme/theme';

export default function DriversScreen() {
  const { drivers } = MOCK;

  const renderDriver = ({ item, index }) => (
    <View style={styles.driverCard}>
      <View style={styles.leftSection}>
        <View style={[styles.positionBadge, index === 0 && styles.goldBadge]}>
          <Text style={styles.positionText}>{index + 1}</Text>
        </View>
      </View>
      
      <View style={styles.mainContent}>
        <View style={styles.nameRow}>
          <Text style={styles.driverName}>{item.name}</Text>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>#{item.number}</Text>
          </View>
        </View>
        
        <View style={styles.teamRow}>
          <Text style={styles.teamIcon}>🏎️</Text>
          <Text style={styles.teamName}>{item.team}</Text>
        </View>
        
        <View style={styles.countryRow}>
          <Text style={styles.flagIcon}>🏁</Text>
          <Text style={styles.countryName}>{item.country}</Text>
        </View>
      </View>
      
      <View style={styles.racingStripe} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DRIVER STANDINGS</Text>
        <View style={styles.headerAccent} />
      </View>
      <FlatList
        data={drivers}
        renderItem={renderDriver}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  // Header
  header: {
    paddingHorizontal: SIZES.paddingScreen,
    paddingTop: SIZES.m,
    paddingBottom: SIZES.l,
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.text,
    fontWeight: '900',
    letterSpacing: 2,
  },
  headerAccent: {
    width: 50,
    height: 4,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.s,
    borderRadius: 2,
  },
  
  // List
  listContent: {
    paddingHorizontal: SIZES.paddingScreen,
    paddingBottom: 40,
  },
  
  // Driver Card
  driverCard: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.paddingCard,
    marginBottom: SIZES.m,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  
  racingStripe: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: COLORS.primary,
  },
  
  leftSection: {
    marginRight: SIZES.m,
  },
  
  positionBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surfaceLight,
    borderWidth: 2,
    borderColor: COLORS.textMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  goldBadge: {
    borderColor: COLORS.gold,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    ...SHADOWS.glowCyan,
  },
  
  positionText: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '900',
  },
  
  mainContent: {
    flex: 1,
  },
  
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.s,
  },
  
  driverName: {
    ...FONTS.bodyBold,
    color: COLORS.text,
    fontSize: 17,
  },
  
  numberBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: SIZES.radiusSmall,
    ...SHADOWS.glow,
  },
  
  numberText: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '900',
  },
  
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  
  teamIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  
  teamName: {
    ...FONTS.bodySmall,
    color: COLORS.textMuted,
    fontWeight: '600',
  },
  
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  flagIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  
  countryName: {
    ...FONTS.caption,
    color: COLORS.accent,
    fontWeight: '600',
  },
});