import { useState } from "react";
import { Button, Text, TextInput, View,StyleSheet, KeyboardAvoidingView } from "react-native";

export default function Index() {
  const [temp, setTemp] = useState<string>("user");
  const [name, setName] = useState<string>("");

  const changeName = (input: string) => {
    
    setName(input);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "yellow",
      padding: 20,
      gap: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    firstname: {
      borderWidth: 1,
      borderColor: "black",
      padding: 10,
      width: "100%",
      backgroundColor: "white",
    }
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Text>Hello user.</Text>
      <TextInput style={styles.firstname} />
      <Button title="ok" onPress={() => changeName(name)}/> 
    </KeyboardAvoidingView>
  );
}


