import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import No1Screen from './src/screens/No1Screen';
import No2Screen from './src/screens/No2Screen';
import No3Screen from './src/screens/No3Screen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="No1" component={No1Screen} />
        <Stack.Screen name="No2" component={No2Screen} />
        <Stack.Screen name="No3" component={No3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
