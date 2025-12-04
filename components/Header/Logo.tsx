import theme from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../public/images/1764601304904.png')}
        style={styles.image}
      />
      {/*       <View style={styles.image}>
        <MaterialCommunityIcons name="gamepad-up" size={48} color="yellow" testID="icon" />
      </View> */}
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
  image: { width: 36, height: 36, margin: 12 },
  text: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
