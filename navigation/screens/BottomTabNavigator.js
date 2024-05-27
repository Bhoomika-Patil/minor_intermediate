import * as React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home';
import CalendarScreen from './Calendar';
import ProgressScreen from './Progress';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const homeName = 'Home';
  const calendarName = 'Calendar';
  const progressName = 'Progress';

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;
          const { name } = route;

          if (name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = focused ? '#0766ad' : 'grey';
          } else if (name === calendarName) {
            iconName = focused ? 'calendar' : 'calendar-outline';
            iconColor = focused ? '#0766ad' : 'grey';
          } else if (name === progressName) {
            iconName = focused ? 'trending-up' : 'trending-down';
            iconColor = focused ? '#0766ad' : 'grey';
          }
          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0766ad',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { height: 90 },
      }}>
      <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name={calendarName} component={CalendarScreen} options={{ headerShown: false }} />
      <Tab.Screen name={progressName} component={ProgressScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
