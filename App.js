import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please write your name.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        onChangeText={(name) => setName(name)}
        keyboardType="number-pad"
      />
      <Text style={styles.text}>Your name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
  },
});
