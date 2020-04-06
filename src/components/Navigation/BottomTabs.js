import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';


import GridScreen from '../../screens/Practice/GridScreen'

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={GridScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwsomeIcon name="home" color="#ff4d4d" size={24} />
                )
            }}
            />
            <Tab.Screen name="Wedstrijden" component={GridScreen} options={{
                tabBarLabel: 'Wedstrijden',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwsomeIcon name="calendar" color="#ff4d4d" size={24} />
                )
            }}
            />
            <Tab.Screen name="Spelers" component={GridScreen} options={{
                tabBarLabel: 'Spelers',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwsomeIcon name="users" color="#ff4d4d" size={24} />
                )
            }} />
            <Tab.Screen name="Menu" component={GridScreen} options={{
                tabBarLabel: 'Menu',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwsomeIcon name="bars" color="#ff4d4d" size={24} />
                )
            }} />
        </Tab.Navigator>
    )
}
