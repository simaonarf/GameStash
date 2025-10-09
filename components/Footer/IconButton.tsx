import AntDesign from "@expo/vector-icons/AntDesign";
import React, { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";

type IconButtonProps = {
  icon: ReactNode;
  text: string;
  onPress?: () => void;
  active?: boolean;
} & TouchableOpacityProps;

export default function IconButton({ icon, text, onPress, active }: IconButtonProps) {
  const color = active ? "white" : "grey";

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name={icon as any} size={24} color={color} />
      <Text style={[styles.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 10,
  },
});
