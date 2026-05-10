import Footer from "@/components/Footer";
import GamePage from "@/components/GamePage";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";


export default function _screen() {

    return (
        <ScreenWrapper>
            <Header />
            <GamePage></GamePage>
            <Footer></Footer>
        </ScreenWrapper>
    );
}