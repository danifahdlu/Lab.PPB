import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class ProfileClassComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.avatar} 
          source={{ uri: 'URL_GAMBAR_AVATAR' }} 
        />
        <Text style={styles.text}>Nama: John Doe</Text>
        <Text style={styles.text}>NPM: 12345678</Text>
        <Text style={styles.text}>Jurusan: Teknik Informatika</Text>
        <Text style={styles.text}>Hobi: Membaca</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default ProfileClassComponent;
