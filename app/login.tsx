import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";
import { ScrollView } from "react-native";

export default function _screen() {
    return (
        <ScreenWrapper>
            <Header />
            <ScrollView>
                <Profile></Profile>
            </ScrollView>
            <Footer></Footer>
        </ScreenWrapper>
    );
}
