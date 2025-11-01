// screens/HomeScreen.js
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MOCK } from '../data/mockData';
import { COLORS, SIZES, FONTS, SHADOWS, components } from '../theme/theme';

export default function HomeScreen() {
  const { races, drivers, teams } = MOCK;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>F1 SIMPLIFIED</Text>
          <Text style={styles.heroSubtitle}>Live the Speed</Text>
          <View style={styles.heroAccent} />
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{races.length}</Text>
            <Text style={styles.statLabel}>RACES</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{drivers.length}</Text>
            <Text style={styles.statLabel}>DRIVERS</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{teams.length}</Text>
            <Text style={styles.statLabel}>TEAMS</Text>
          </View>
        </View>

        {/* Upcoming Races */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>UPCOMING RACES</Text>
            <View style={styles.sectionAccent} />
          </View>
          {races.map((race, idx) => (
            <View key={race.id} style={styles.raceCard}>
              <View style={styles.raceNumber}>
                <Text style={styles.raceNumberText}>{idx + 1}</Text>
              </View>
              <View style={styles.raceContent}>
                <Text style={styles.raceTitle}>{race.name}</Text>
                <Text style={styles.raceCircuit}>{race.circuit}</Text>
                <View style={styles.raceFooter}>
                  <Text style={styles.raceDate}>📅 {race.date}</Text>
                  <Text style={styles.raceWinner}>🏆 {race.winner}</Text>
                </View>
                <Text style={styles.raceLaps}>{race.laps} Laps</Text>
              </View>
              <View style={styles.racingStripe} />
            </View>
          ))}
        </View>

        {/* Featured Drivers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>TOP DRIVERS</Text>
            <View style={styles.sectionAccent} />
          </View>
          {drivers.map((driver, idx) => (
            <View key={driver.id} style={styles.driverCard}>
              <View style={[styles.driverPosition, idx === 0 && styles.goldBorder]}>
                <Text style={styles.driverPositionText}>{idx + 1}</Text>
              </View>
              <View style={styles.driverContent}>
                <View style={styles.driverHeader}>
                  <Text style={styles.driverName}>{driver.name}</Text>
                  <View style={styles.driverNumber}>
                    <Text style={styles.driverNumberText}>#{driver.number}</Text>
                  </View>
                </View>
                <Text style={styles.driverTeam}>{driver.team}</Text>
                <Text style={styles.driverCountry}>🏁 {driver.country}</Text>
              </View>
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
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SIZES.paddingScreen,
    paddingBottom: 40,
  },
  
  // Hero
  hero: {
    alignItems: 'center',
    paddingVertical: SIZES.l,
    marginBottom: SIZES.l,
  },
  heroTitle: {
    ...FONTS.hero,
    color: COLORS.primary,
    textShadowColor: COLORS.glow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 12,
  },
  heroSubtitle: {
    ...FONTS.caption,
    color: COLORS.accent,
    marginTop: SIZES.s,
    letterSpacing: 2,
  },
  heroAccent: {
    width: 60,
    height: 4,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.m,
    borderRadius: 2,
  },
  
  // Stats
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.l,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.m,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.medium,
  },
  statValue: {
    ...FONTS.h1,
    color: COLORS.primary,
    fontWeight: '900',
  },
  statLabel: {
    ...FONTS.caption,
    color: COLORS.textMuted,
    marginTop: 4,
    letterSpacing: 1,
  },
  
  // Section
  section: {
    marginBottom: SIZES.xl,
  },
  sectionHeader: {
    marginBottom: SIZES.m,
    paddingBottom: SIZES.s,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.text,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  sectionAccent: {
    width: 40,
    height: 3,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.s,
    borderRadius: 2,
  },
  
  // Race Card
  raceCard: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.paddingCard,
    marginBottom: SIZES.m,
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  raceNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.m,
    ...SHADOWS.glow,
  },
  raceNumberText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '900',
  },
  raceContent: {
    flex: 1,
  },
  raceTitle: {
    ...FONTS.bodyBold,
    color: COLORS.text,
    marginBottom: 4,
  },
  raceCircuit: {
    ...FONTS.bodySmall,
    color: COLORS.textMuted,
    marginBottom: SIZES.s,
  },
  raceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.s,
  },
  raceDate: {
    ...FONTS.caption,
    color: COLORS.accent,
  },
  raceWinner: {
    ...FONTS.caption,
    color: COLORS.gold,
  },
  raceLaps: {
    ...FONTS.tiny,
    color: COLORS.textDisabled,
    marginTop: 4,
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
    ...SHADOWS.medium,
  },
  driverPosition: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.surfaceLight,
    borderWidth: 2,
    borderColor: COLORS.textMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.m,
  },
  goldBorder: {
    borderColor: COLORS.gold,
    ...SHADOWS.glowCyan,
  },
  driverPositionText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '900',
  },
  driverContent: {
    flex: 1,
  },
  driverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  driverName: {
    ...FONTS.bodyBold,
    color: COLORS.text,
  },
  driverNumber: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: SIZES.radiusSmall,
  },
  driverNumberText: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '800',
  },
  driverTeam: {
    ...FONTS.bodySmall,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  driverCountry: {
    ...FONTS.caption,
    color: COLORS.accent,
  },
});