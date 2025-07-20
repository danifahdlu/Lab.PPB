import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorBoxApp() {
  const [boxColor, setBoxColor] = useState('blue');

  const handlePress = () => {
    if (boxColor === 'blue') {
      setBoxColor('red');
    } else {
      setBoxColor('blue');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: boxColor }]} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ubah Warna</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
