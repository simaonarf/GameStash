import { useActionSheet } from "@expo/react-native-action-sheet";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MyComponent() {
  const { showActionSheetWithOptions } = useActionSheet();

  const options = ["Cancelar", "Alfabeticamente", "Releveância"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

  const handleOpen = () => {
    console.log("Botão Aberto");
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        console.log("Selected: ", buttonIndex);
      }
    );
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.loginButton, styles.fixedButton]} onPress={handleOpen}>
          <Text style={styles.text}>Ordenar:</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: "#FFD700",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  fixedButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
  },
});