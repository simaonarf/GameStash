import { ThemedStatusBar, ThemeProvider } from "@andresjesse/bobber-ui";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <ThemeProvider defaultColorScheme="dark">
      <ThemedStatusBar />
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </ThemeProvider>)
}
