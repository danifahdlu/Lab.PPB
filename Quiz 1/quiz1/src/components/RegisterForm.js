import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function RegisterForm() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telp, setTelp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama Lengkap" style={styles.input} value={nama} onChangeText={setNama} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="No Telp" style={styles.input} value={telp} onChangeText={setTelp} keyboardType="phone-pad" />
      <Button title="Submit" onPress={() => setSubmitted(true)} />

      {submitted && (
        <View style={styles.result}>
          <Text>Nama: {nama}</Text>
          <Text>Email: {email}</Text>
          <Text>No Telp: {telp}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
  },
});
