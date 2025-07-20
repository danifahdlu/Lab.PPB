import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFriends from './src/latihan-3/components/Friends/MyFriends';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './src/Page1';
import Page2 from './src/Page2';
import SignIn from './src/SignIn';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={Page1} options={{ title: 'Home' }} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    );
  }

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Page2}/>
    </Stack.Navigator>
  );
}

function MyFriendsPage() {
  return <MyFriends />;
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
