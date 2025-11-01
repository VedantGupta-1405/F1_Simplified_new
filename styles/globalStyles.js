// styles/globalStyles.js
import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Define responsive padding based on screen width
let horizontalPadding = 20;
let verticalPadding = 16;

if (width < 360) {
  // Small devices
  horizontalPadding = 14;
  verticalPadding = 10;
} else if (width >= 360 && width < 768) {
  // Regular phones
  horizontalPadding = 20;
  verticalPadding = 16;
} else {
  // Tablets / large devices
  horizontalPadding = 28;
  verticalPadding = 20;
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: horizontalPadding,
    paddingVertical: verticalPadding,
    paddingBottom: 24, // ✅ ensures content stays above bottom tab bar
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight + 8
        : getStatusBarHeight(true) + 8, // ✅ safe top padding for notch/status bar
  },

  // Typography
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e10600', // F1 red accent
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  // Card-like UI sections
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  // List item styling
  listItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  itemSub: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  small: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },

  // Key–Value layout
  kvRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  kvKey: {
    width: 110,
    fontWeight: '600',
    fontSize: 13,
    color: '#111',
  },
  kvVal: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },
});
