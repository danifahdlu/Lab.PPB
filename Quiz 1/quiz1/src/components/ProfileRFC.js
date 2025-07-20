import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const ProfileRFC = () => {
  return (
    <View style={styles.container}>
        <Text>
            <Text style={{ fontWeight: 'bold' }}>React Function Component</Text>{'\n'}
            Nama: Adi Saputra{'\n'}
            NPM: 232310011{'\n'}
            Jurusan: Teknologi Informasi{'\n'}
            Hobi: Film
        </Text>
    </View>
  )
}

export default ProfileRFC


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});