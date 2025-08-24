import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [anwser, setAnwser] = useState<number>(0);
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  const changeNumber1 = (input: string) => {
    setNumber1(parseFloat(input));
  };

  const changeNumber2 = (input: string) => {
    setNumber2(parseFloat(input));
  };

  const plus = () => {
    const sum = number1 + number2;
    setAnwser(sum);
  }
  const minus = () => {
    const difference = number1 - number2;
    setAnwser(difference);
  };


  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      padding: 20,
      gap: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: "black",
      padding: 10,
      width: "100%",
      backgroundColor: "white",
    },
    button: {
      backgroundColor: "lightgray",
      padding: 10,
      margin: 5,
      borderRadius: 5,
      alignItems: "center",
      minWidth: 50,
    },
    buttonContainer: {
      flexDirection: "row",
      gap: 20, 
      justifyContent: "center",         
      
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
    }
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Text>Result: {anwser}</Text>
      <TextInput keyboardType="numeric" style={styles.input} value={number1.toString()} onChangeText={changeNumber1} />
      <TextInput keyboardType="numeric" style={styles.input} value={number2.toString()} onChangeText={changeNumber2} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={plus} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={minus} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}


