import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  Touchable,
  View,
} from "react-native";
import { Button, TouchableOpacity } from "react-native-web";

export default function App() {
  const [name, setName] = useState();
  const [submitted, setSubmitted] = useState(false);
  const registerButton = () => {
    if (name > 3) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert(
      //   "Warning",
      //   "The name must be more than 3 characters",
      //   [
      //     {
      //       text: "OK",
      //       onPress: () => console.warn("OK press"),
      //     },
      //     {
      //       text: "Cancel",
      //       onPress: () => console.warn("CANCEL press"),
      //     },
      //     {
      //       text: "Do not show again",
      //       onPress: () => console.warn("DO NOT SHOW AGAIN press"),
      //     },
      //   ],
      //   { cancelable: true, onDismiss: () => console.warn("Alert Dismist") }
      // );
      ToastAndroid.show(
        "the name must be 3 characters.",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please write your name.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        onChangeText={(name) => setName(name)}
        keyboardType="number-pad"
      />
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "grey" : "green" },
          styles.button,
        ]}
        onPress={registerButton}
      >
        <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>You are register as {name}</Text>
      ) : null}
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
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
  },
});
