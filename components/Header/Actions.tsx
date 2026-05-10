import theme from "@/constants/theme";
import Feather from '@expo/vector-icons/Feather';
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

export default function Actions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.dimension.sm,
  },
});
