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

// 🎨 Custom Theme
const COLORS = {
  primary: '#e10600', // F1 red
  background: '#0b0b0b', // Dark background
  card: '#1a1a1a', // Darker card
  text: '#ffffff', // White text
  muted: '#888888', // Muted grey
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
              height: 90,
              borderBottomWidth: 0,
              shadowColor: 'transparent',
            },
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: '700',
              color: COLORS.primary,
              textTransform: 'uppercase',
              letterSpacing: 1,
            },
            headerTitleAlign: 'center',

            tabBarIcon: ({ color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = 'home-outline';
                  break;
                case 'Drivers':
                  iconName = 'people-outline';
                  break;
                case 'Teams':
                  iconName = 'car-outline';
                  break;
                case 'Telemetry':
                  iconName = 'speedometer-outline';
                  break;
                case 'History':
                  iconName = 'time-outline';
                  break;
                default:
                  iconName = 'ellipse-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.muted,
            tabBarStyle: {
              backgroundColor: COLORS.card,
              borderTopWidth: 0,
              height: 100,
              paddingBottom: 18,
              paddingTop: 8,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 8,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
              letterSpacing: 0.5,
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
