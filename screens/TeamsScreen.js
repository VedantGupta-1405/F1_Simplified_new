// screens/TeamsScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import { MOCK } from '../data/mockData';
import { COLORS, SIZES, FONTS, SHADOWS } from '../theme/theme';

export default function TeamsScreen() {
  const { teams } = MOCK;

  const renderTeam = ({ item, index }) => (
    <View style={styles.teamCard}>
      <View style={styles.cardHeader}>
        <View style={styles.teamPosition}>
          <Text style={styles.positionText}>{index + 1}</Text>
        </View>
        <View style={styles.teamTitleSection}>
          <Text style={styles.teamName}>{item.name}</Text>
          <View style={styles.championshipBadge}>
            <Text style={styles.trophyIcon}>🏆</Text>
            <Text style={styles.championshipText}>{item.championships}x</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.infoRow}>
        <Text style={styles.infoIcon}>📍</Text>
        <Text style={styles.infoLabel}>BASE:</Text>
        <Text style={styles.infoValue}>{item.base}</Text>
      </View>
      
      <View style={styles.driversSection}>
        <Text style={styles.driversLabel}>DRIVERS</Text>
        {item.drivers.map((driver, idx) => (
          <View key={idx} style={styles.driverPill}>
            <Text style={styles.driverPillText}>{driver}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.racingStripe} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CONSTRUCTOR STANDINGS</Text>
        <View style={styles.headerAccent} />
      </View>
      <FlatList
        data={teams}
        renderItem={renderTeam}
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
  
  // Team Card
  teamCard: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.paddingCard,
    marginBottom: SIZES.m,
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
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.m,
  },
  
  teamPosition: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.m,
    ...SHADOWS.glow,
  },
  
  positionText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '900',
  },
  
  teamTitleSection: {
    flex: 1,
  },
  
  teamName: {
    ...FONTS.h4,
    color: COLORS.text,
    fontWeight: '800',
    marginBottom: 4,
  },
  
  championshipBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.glassStrong,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: SIZES.radiusSmall,
    alignSelf: 'flex-start',
  },
  
  trophyIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  
  championshipText: {
    ...FONTS.caption,
    color: COLORS.gold,
    fontWeight: '800',
  },
  
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: SIZES.m,
  },
  
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.m,
  },
  
  infoIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  
  infoLabel: {
    ...FONTS.caption,
    color: COLORS.textMuted,
    fontWeight: '700',
    letterSpacing: 1,
    marginRight: 8,
  },
  
  infoValue: {
    ...FONTS.bodySmall,
    color: COLORS.text,
    fontWeight: '600',
    flex: 1,
  },
  
  driversSection: {
    marginTop: SIZES.s,
  },
  
  driversLabel: {
    ...FONTS.caption,
    color: COLORS.textMuted,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: SIZES.s,
  },
  
  driverPill: {
    backgroundColor: COLORS.surfaceLight,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
    paddingHorizontal: SIZES.m,
    paddingVertical: SIZES.s,
    borderRadius: SIZES.radiusSmall,
    marginBottom: 6,
  },
  
  driverPillText: {
    ...FONTS.bodySmall,
    color: COLORS.text,
    fontWeight: '600',
  },
});