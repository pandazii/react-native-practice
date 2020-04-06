import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native'; 
import BottomTabs from './src/components/Navigation/BottomTabs'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

