import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN IN</Text>
      <TextInput placeholder="Email" style={styles.input} placeholderTextColor="gray" />
      <TextInput placeholder="Password" style={styles.input} placeholderTextColor="gray" secureTextEntry />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation('HomeTab')} // replace agar login tidak bisa di-back
      >
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
