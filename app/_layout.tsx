import { ThemedStatusBar, ThemeProvider } from "@andresjesse/bobber-ui";
import { Stack } from "expo-router";
import React from "react";
import BookmarkSync from "../components/BookmarkSync";
import { AuthProvider } from "../contexts/AuthContext";
import { BookmarkProvider } from "../contexts/BookmarkContext";

export default function _layout() {
  return (
    <AuthProvider>
      <BookmarkProvider>
        <BookmarkSync />
        <ThemeProvider defaultColorScheme="dark">
          <ThemedStatusBar />
          <Stack screenOptions={{ headerShown: false }}></Stack>
        </ThemeProvider>
      </BookmarkProvider>
    </AuthProvider>
  )
}
