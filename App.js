import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import GridScreen from './src/screens/Home/GridScreen'

export default function App() {
  return (
    <GridScreen />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  style: {

  }
});

