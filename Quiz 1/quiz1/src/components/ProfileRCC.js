import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProfileRCC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Class Component</Text>
        <Text>Nama: Adi Saputra</Text>
        <Text>NPM: 232310011</Text>
        <Text>Jurusan: Teknologi Informasi</Text>
        <Text>Hobi: Film</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
