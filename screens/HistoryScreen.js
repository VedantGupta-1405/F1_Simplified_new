// screens/HistoryScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import { MOCK } from '../data/mockData';
import { COLORS, SIZES, FONTS, SHADOWS } from '../theme/theme';

export default function HistoryScreen() {
  const { history } = MOCK;

  const renderHistory = ({ item, index }) => (
    <View style={styles.historyCard}>
      <View style={styles.cardHeader}>
        <View style={styles.seasonBadge}>
          <Text style={styles.seasonText}>{item.season}</Text>
        </View>
        <View style={styles.trophySection}>
          <Text style={styles.trophyIcon}>🏆</Text>
        </View>
      </View>
      
      <View style={styles.contentSection}>
        <View style={styles.championRow}>
          <Text style={styles.label}>CHAMPION</Text>
          <Text style={styles.championName}>{item.champion}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🏎️</Text>
            <Text style={styles.infoText}>{item.team}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🏁</Text>
            <Text style={styles.infoText}>{item.races} Races</Text>
          </View>
        </View>
        
        {index === 0 && (
          <View style={styles.recentBadge}>
            <Text style={styles.recentText}>MOST RECENT</Text>
          </View>
        )}
      </View>
      
      <View style={styles.racingStripe} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CHAMPIONSHIP HISTORY</Text>
        <View style={styles.headerAccent} />
        <Text style={styles.headerSubtitle}>World Champions</Text>
      </View>
      <FlatList
        data={history}
        renderItem={renderHistory}
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
    marginBottom: SIZES.s,
    borderRadius: 2,
  },
  headerSubtitle: {
    ...FONTS.caption,
    color: COLORS.gold,
    letterSpacing: 1,
  },
  
  // List
  listContent: {
    paddingHorizontal: SIZES.paddingScreen,
    paddingBottom: 40,
  },
  
  // History Card
  historyCard: {
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.m,
  },
  
  seasonBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.m,
    paddingVertical: SIZES.s,
    borderRadius: SIZES.radiusSmall,
    ...SHADOWS.glow,
  },
  
  seasonText: {
    ...FONTS.h4,
    color: COLORS.text,
    fontWeight: '900',
    letterSpacing: 1,
  },
  
  trophySection: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.glassStrong,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.gold,
  },
  
  trophyIcon: {
    fontSize: 24,
  },
  
  contentSection: {
    paddingTop: SIZES.s,
  },
  
  championRow: {
    marginBottom: SIZES.m,
  },
  
  label: {
    ...FONTS.caption,
    color: COLORS.textMuted,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  
  championName: {
    ...FONTS.h4,
    color: COLORS.text,
    fontWeight: '800',
  },
  
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.s,
  },
  
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceLight,
    paddingHorizontal: SIZES.m,
    paddingVertical: SIZES.s,
    borderRadius: SIZES.radiusSmall,
    flex: 0.48,
  },
  
  infoIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  
  infoText: {
    ...FONTS.bodySmall,
    color: COLORS.textSoft,
    fontWeight: '600',
    flex: 1,
  },
  
  recentBadge: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: SIZES.m,
    paddingVertical: 6,
    borderRadius: SIZES.radiusPill,
    alignSelf: 'flex-start',
    marginTop: SIZES.m,
    ...SHADOWS.glowCyan,
  },
  
  recentText: {
    ...FONTS.caption,
    color: COLORS.background,
    fontWeight: '900',
    letterSpacing: 1,
  },
});