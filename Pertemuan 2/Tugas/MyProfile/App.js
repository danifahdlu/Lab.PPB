import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={require('./assets/8287076.jpg')}
        style={styles.background} 
        resizeMode="cover"
      >
        {/* Bagian tengah */}
        <View style={styles.mainContent}>
          <View style={styles.overlay}>
            <Text style={styles.name}>Dani Fahdlu Rohman Silaaen</Text>
            <Text style={styles.bio}>Institut Bisnis dan Informatika Kesatuan | Technology Information</Text>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>📧 Email: danifahdlu@gmail.com</Text>
              <Text style={styles.info}>📞 Phone: 085282430828</Text>
              <Text style={styles.info}>🆔 NPM: 232310027</Text>
              <Text style={styles.info}>🏫 Class: TI-23-KA</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  bio: {
    fontSize: 16,
    color: '#ddd',
    marginVertical: 10,
    textAlign: 'center',
  },
  infoContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
  info: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 2,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
