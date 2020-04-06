import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';

import GridScreen from './src/screens/Practice/GridScreen'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={GridScreen} key={1} />
          <Tab.Screen name="Wedstrijden" component={GridScreen} key={1} />
          <Tab.Screen name="Spelers" component={GridScreen} key={1} />
          <Tab.Screen name="Menu" component={GridScreen} key={1} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

