// screens/TelemetryScreen.js
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import { MOCK } from '../data/mockData';
import { COLORS, SIZES, FONTS, SHADOWS } from '../theme/theme';

export default function TelemetryScreen() {
  const { telemetrySamples } = MOCK;

  const renderTelemetry = ({ item, index }) => (
    <View style={styles.telemetryCard}>
      <View style={styles.cardHeader}>
        <View style={styles.sessionBadge}>
          <Text style={styles.sessionIcon}>📊</Text>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.driverName}>{item.driver}</Text>
          <Text style={styles.sessionName}>{item.session}</Text>
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.dataSection}>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>SPEED (KPH)</Text>
          <View style={styles.dataValues}>
            {item.speedKph.map((speed, idx) => (
              <View key={idx} style={styles.dataBadge}>
                <Text style={styles.dataValue}>{speed}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>THROTTLE (%)</Text>
          <View style={styles.dataValues}>
            {item.throttlePercent.map((throttle, idx) => (
              <View key={idx} style={[styles.dataBadge, styles.throttleBadge]}>
                <Text style={styles.dataValue}>{throttle}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      
      <View style={styles.chartPlaceholder}>
        <Text style={styles.chartIcon}>📈</Text>
        <Text style={styles.chartText}>Charts & Graphs Coming Soon</Text>
        <Text style={styles.chartSubtext}>Live telemetry visualization</Text>
      </View>
      
      <View style={styles.racingStripe} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>LIVE TELEMETRY</Text>
        <View style={styles.headerAccent} />
        <Text style={styles.headerSubtitle}>Real-time Performance Data</Text>
      </View>
      <FlatList
        data={telemetrySamples}
        renderItem={renderTelemetry}
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
    color: COLORS.accent,
    letterSpacing: 1,
  },
  
  // List
  listContent: {
    paddingHorizontal: SIZES.paddingScreen,
    paddingBottom: 40,
  },
  
  // Telemetry Card
  telemetryCard: {
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
  
  sessionBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.m,
    ...SHADOWS.glow,
  },
  
  sessionIcon: {
    fontSize: 20,
  },
  
  headerContent: {
    flex: 1,
  },
  
  driverName: {
    ...FONTS.bodyBold,
    color: COLORS.text,
    fontSize: 17,
    marginBottom: 2,
  },
  
  sessionName: {
    ...FONTS.caption,
    color: COLORS.textMuted,
    fontWeight: '600',
  },
  
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: SIZES.m,
  },
  
  // Data Section
  dataSection: {
    marginBottom: SIZES.m,
  },
  
  dataRow: {
    marginBottom: SIZES.m,
  },
  
  dataLabel: {
    ...FONTS.caption,
    color: COLORS.textMuted,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: SIZES.s,
  },
  
  dataValues: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  dataBadge: {
    backgroundColor: COLORS.surfaceLight,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
    paddingHorizontal: SIZES.m,
    paddingVertical: SIZES.s,
    borderRadius: SIZES.radiusSmall,
    marginRight: SIZES.s,
    marginBottom: SIZES.s,
  },
  
  throttleBadge: {
    borderLeftColor: COLORS.gold,
  },
  
  dataValue: {
    ...FONTS.bodySmall,
    color: COLORS.text,
    fontWeight: '700',
  },
  
  // Chart Placeholder
  chartPlaceholder: {
    backgroundColor: COLORS.glassStrong,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.l,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    borderStyle: 'dashed',
  },
  
  chartIcon: {
    fontSize: 32,
    marginBottom: SIZES.s,
  },
  
  chartText: {
    ...FONTS.bodySmall,
    color: COLORS.textMuted,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  
  chartSubtext: {
    ...FONTS.caption,
    color: COLORS.textDisabled,
    textAlign: 'center',
  },
});