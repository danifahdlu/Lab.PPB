import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyFriends from "./components/MyFriends";

export default function App() {
  return (
    <View style={styles.container}>
      <MyFriends />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});