import theme from "@/constants/theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      {/*       <Image
        source={{
          uri: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
        }}
        style={styles.image}
      /> */}
      <View style={styles.image}>
        <MaterialCommunityIcons name="gamepad-up" size={48} color="yellow" />
      </View>
      <Text style={styles.text}>GameStash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.dimension.sm,
  },
  image: { padding: 8 },
  text: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
