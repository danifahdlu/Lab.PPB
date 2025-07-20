import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
  const newCount = count + 1;

  if (newCount > 10) {
    Alert.alert('Peringatan', 'Nilai maksimal tercapai.');
    return;
  }

  setCount(newCount);
};

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  countText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default CounterApp;