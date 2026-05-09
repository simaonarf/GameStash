import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Actions from "./Actions";
import Logo from "./Logo";

import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

export default function Header() {
  const pathname = usePathname();

  const hiddenRoutes = ["/", "/favorites", "/login"];

  const shouldShowBack =
    router.canGoBack() &&
    !hiddenRoutes.includes(pathname);

  return (
    <View style={styles.container}>

      <View style={styles.leftSection}>
        {shouldShowBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={26}
              color="#fff"
            />
          </TouchableOpacity>
        )}

        <Logo />
      </View>


      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.dimension.xs,
    justifyContent: "space-between",
    paddingHorizontal: theme.dimension.xs,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  backButton: {
    padding: 4
  }
});
