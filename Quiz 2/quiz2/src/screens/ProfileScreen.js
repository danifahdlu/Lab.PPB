// ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFjp_ER7JLoNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710514488426?e=1755734400&v=beta&t=7oCA5bQQTlXI-D9NsiPotsNLm16lvIOvIJmoyKuywzE' }}
        style={styles.profileImage}
      />
      <Text style={styles.text}>Nama: Adi Saputra</Text>
      <Text style={styles.text}>Email: 232310011@student.ibik.ac.id</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;