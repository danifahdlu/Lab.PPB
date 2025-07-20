// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Lihat Profil"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Soal No 1"
        onPress={() => navigation.navigate('SoalNo1')}
      />
      <Button
        title="Soal No 2"
        onPress={() => navigation.navigate('SoalNo2')}
      />
      <Button
        title="Soal No 3"
        onPress={() => navigation.navigate('SoalNo3')}
      />
      <Button
        title="Soal No 4"
        onPress={() => navigation.navigate('SoalNo4')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;