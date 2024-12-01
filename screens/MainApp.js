import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Prompt from './Prompt';
import Friends from './Friends';
import Results from './Results';
import Account from './Account';
const Tab = createBottomTabNavigator();
export default function MainApp() {
  return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Prompt') {
                iconName = focused ? 'home' : 'home-outline';
                } 
                // else if (route.name === 'Friends') {
                // iconName = focused ? 'group' : 'group-outline';
                // }
                 else if (route.name === 'Results') {
                iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Account') {
                iconName = focused ? 'person' : 'person-outline';
                }

                // return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'black',
            headerShown:false,
            })}
            >
            <Tab.Screen name="Prompt" component={Prompt} />
            {/* <Tab.Screen name="Friends" component={Friends} /> */}
            <Tab.Screen name="Results" component={Results} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})