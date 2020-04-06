import React from 'react'

import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';

// Screens
import GridScreen from '../../screens/Practice/GridScreen'
import HomeScreen from '../../screens/Home/HomeScreen'


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
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

const BottomTabsStyles = StyleSheet.create({

});

