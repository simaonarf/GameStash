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

        <ScrollView>
          <Main />
        </ScrollView>

        <Footer />
      </ScreenWrapper>
    </ActionSheetProvider>

  );
}
