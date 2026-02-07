import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function modoDiscreto() {
  const [input, setInput] = useState("");

  const handlePress = (digit) => {
    setInput((prev) => prev + digit);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || "0"}</Text>

        <TouchableOpacity onPress={handleClear}>
         <View style={{width: 30, height: 30, marginTop: 20, backgroundColor: '#000000ff', alignItems: 'flex-end'}} >
            <MaterialCommunityIcons name="arrow-left-bold" size={25} color='#fff' />
         </View>
      </TouchableOpacity>
      </View>

      

      <View style={{width: '100%', height: 0.5, backgroundColor: '#ececec52', marginBottom: 10}}></View>

      {/* Teclado */}
      <View style={styles.keypad}>
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handlePress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },
  display: {
    height: 100,
    backgroundColor: "#000000ff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  displayText: {
    fontSize: 40,
    color: "#fff",
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    height: 80,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
  clear: {
    backgroundColor: "#b22222",
  },
});
