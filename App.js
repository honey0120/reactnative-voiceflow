import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Agent from './src';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Agent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
