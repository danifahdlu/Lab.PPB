import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Page1 = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Page2', { name: 'Febry' })}>
      <View style={{ backgroundColor: 'purple', padding: 10, borderRadius: 10, margin: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Click here to see me</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Page1
