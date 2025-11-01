// App.js
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import DriversScreen from './screens/DriversScreen';
import TeamsScreen from './screens/TeamsScreen';
import TelemetryScreen from './screens/TelemetryScreen';
import HistoryScreen from './screens/HistoryScreen';

// 🎨 F1 Theme Colors
const COLORS = {
  primary: '#E10600',      // F1 Red
  background: '#000000',   // Pure Black
  card: '#0A0A0A',         // Dark Card
  text: '#FFFFFF',
  textMuted: '#8E8E93',
  accent: '#00D9FF',       // Cyan accent
  gold: '#FFD700',         // Gold for highlights
};

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    card: COLORS.card,
    text: COLORS.text,
    border: 'transparent',
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <NavigationContainer theme={AppTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.card,
              height: 110,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 2,
              borderBottomColor: COLORS.primary,
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: '900',
              color: COLORS.primary,
              textTransform: 'uppercase',
              letterSpacing: 2,
              textShadowColor: 'rgba(225, 6, 0, 0.3)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 8,
            },
            headerTitleAlign: 'center',

            tabBarIcon: ({ color, size, focused }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Drivers':
                  iconName = focused ? 'people' : 'people-outline';
                  break;
                case 'Teams':
                  iconName = focused ? 'car-sport' : 'car-sport-outline';
                  break;
                case 'Telemetry':
                  iconName = focused ? 'speedometer' : 'speedometer-outline';
                  break;
                case 'History':
                  iconName = focused ? 'trophy' : 'trophy-outline';
                  break;
                default:
                  iconName = 'ellipse-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.textMuted,
            tabBarStyle: {
              backgroundColor: COLORS.card,
              borderTopWidth: 2,
              borderTopColor: COLORS.primary,
              height: 115,
              paddingBottom: 24,
              paddingTop: 12,
              shadowColor: COLORS.primary,
              shadowOpacity: 0.3,
              shadowRadius: 20,
              elevation: 20,
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '700',
              letterSpacing: 0.8,
              textTransform: 'uppercase',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Drivers" component={DriversScreen} />
          <Tab.Screen name="Teams" component={TeamsScreen} />
          <Tab.Screen name="Telemetry" component={TelemetryScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}