import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [height, onChangeHeight] = useState("");
  const [weight, onChangeWeight] = useState("");
  const [BMI, onChangeBMI] = useState("");

  const calculateBMI = () => {
    const calculateBMI = (
      Number(weight) /
      ((Number(height) * Number(height)) / 10000)
    ).toFixed(1);
    console.log(calculateBMI);
    const BMI = Number(calculateBMI);

    let result = calculateBMI.toString();
    if (BMI < 18.5) result = "Underweight";
    else if (BMI >= 18.5 && BMI <= 24.9) result = "Normal weight";
    else if (BMI >= 25 && BMI <= 29.9) result = "Overweight";
    else if (BMI >= 30) result = "Obesity";
    onChangeBMI(result);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your height in cm"
        keyboardType="numeric"
        value={height}
        onChangeText={onChangeHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your weight in kg"
        keyboardType="numeric"
        value={weight}
        onChangeText={onChangeWeight}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate" color={"darkblue"} onPress={calculateBMI} />
      </View>
      {BMI && <Text style={styles.text}>Your BMI result is: {BMI}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
    padding: 20,
    justifyContent: "center",
  },

  titleText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
  },

  buttonContainer: {
    backgroundColor: "orange",
    marginVertical: 10,
    width: "auto",
  },
});
