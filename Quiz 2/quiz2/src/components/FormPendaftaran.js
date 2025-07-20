import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const FormPendaftaran = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    noHp: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.nama || !formData.email || !formData.noHp) {
      Alert.alert('Error', 'Semua field harus diisi!');
      return;
    }

    Alert.alert(
      'Data Pendaftaran',
      `Nama: ${formData.nama}\nEmail: ${formData.email}\nNo HP: ${formData.noHp}`
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={formData.nama}
        onChangeText={(text) => handleChange('nama', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor HP"
        keyboardType="phone-pad"
        value={formData.noHp}
        onChangeText={(text) => handleChange('noHp', text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default FormPendaftaran;