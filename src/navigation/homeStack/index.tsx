import React from 'react'
import { View, Text , StyleSheet, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Screens from '../screens';
import { T_BOTTOM_TAB_SCREEN_PARAM } from './types';
import { DashboardScreen, WatchScreen, MediaLibraryScreen, MoreScreen } from '../../screens';

const Tab = createBottomTabNavigator<T_BOTTOM_TAB_SCREEN_PARAM>();

export default function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'apps';

          switch (route.name) {
            case Screens.DASHBOARD:
              iconName = 'apps';
              break;
            case Screens.WATCH:
              iconName = 'play-circle';
              break;
            case Screens.MEDIA_LIBRARY:
              iconName = 'folder';
              break;
            case Screens.MORE:
              iconName = 'menu';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#2C253C',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      })}
      initialRouteName={Screens.WATCH}
    >
      <Tab.Screen name={Screens.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={Screens.WATCH} component={WatchScreen} />
      <Tab.Screen name={Screens.MEDIA_LIBRARY} component={MediaLibraryScreen} />
      <Tab.Screen name={Screens.MORE} component={MoreScreen} />
    </Tab.Navigator>
  );
}