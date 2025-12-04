import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import ScreenWrapper from "@/components/ScreenWrapper";
import {
  ActionSheetProvider
} from "@expo/react-native-action-sheet";
import React from "react";
import { ScrollView } from "react-native";

export default function _screen() {
  return (
    <ActionSheetProvider>
      <ScreenWrapper>
        <Header />

        <ScrollView style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 120,
          }}>
          <Main />
        </ScrollView>

        <Footer />
      </ScreenWrapper>
    </ActionSheetProvider>

  );
}
