import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Soal No 1" onPress={() => navigation.navigate('No1')} />
      <Button title="Soal No 2" onPress={() => navigation.navigate('No2')} />
      <Button title="Soal No 3" onPress={() => navigation.navigate('No3')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 40,
  },
});
