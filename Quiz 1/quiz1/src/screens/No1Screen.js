import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileRCC from '../components/ProfileRCC';
import ProfileRFC from '../components/ProfileRFC';

export default function No1Screen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileRFC />
      <ProfileRCC />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
