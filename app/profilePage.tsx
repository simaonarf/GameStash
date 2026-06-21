import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfilePage from "@/components/Profile/page";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";
import { ScrollView } from "react-native";

export default function _screen() {
    return (
        <ScreenWrapper>
            <Header />
            <ScrollView>
                <ProfilePage></ProfilePage>
            </ScrollView>
            <Footer></Footer>
        </ScreenWrapper>
    );
}
