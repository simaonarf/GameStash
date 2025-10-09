import Favorite from "@/components/Favorites";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";

export default function _screen() {
    return (
        <ScreenWrapper>
            <Header />
            <Favorite></Favorite>
            <Footer></Footer>
        </ScreenWrapper>
    );
}
