import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <View style={{flex: 1}} >
      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}