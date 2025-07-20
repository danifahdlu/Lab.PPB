import React from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';

const HelloScreen = () => {
  const handleButtonPress = () => {
    Alert.alert('Info', 'Tombol berhasil ditekan!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo, Selamat Datang di Kuis React Native!</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Button
        title="Klik Saya"
        onPress={handleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default HelloScreen;