// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import HelloScreen from './src/components/HelloScreen';
import CounterApp from './src/components/CounterApp';
import ListMahasiswa from './src/components/ListMahasiswa';
import FormPendaftaran from './src/components/FormPendaftaran';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
        <Stack.Screen name="SoalNo1" component={HelloScreen} />
        <Stack.Screen name="SoalNo2" component={CounterApp} />
        <Stack.Screen name="SoalNo3" component={ListMahasiswa} />
        <Stack.Screen name="SoalNo4" component={FormPendaftaran} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;