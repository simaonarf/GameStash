import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GameBanner from "./banner";
import Card from "./card";
import Carousel from "./carousel";

export default function Container() {

    const [bookmarkCount, setBookmarkCount] = useState(0);

    function handleSave(saved: boolean) {
        setBookmarkCount(prev => {
            const newCount = saved ? prev + 1 : prev - 1;
            console.log("Bookmarks feitos:", newCount);
            return newCount;
        });
    }

    return (
        <View style={styles.container}>

            <GameBanner></GameBanner>

            <Text style={styles.text}>Novidades da Semana</Text>
            <Carousel>
                <Card uri="https://image.api.playstation.com/vulcan/ap/rnd/202508/2503/d975a2a2d80276d9891d8d3430fb8ec7ed2e4ad807707e76.png"
                    onToggleSave={handleSave} />

                <Card uri="https://m.media-amazon.com/images/M/MV5BODA2YzRkODktNTIwYi00ZDk1LThlMTAtYzE4MGEyODM4NzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    onToggleSave={handleSave} />

                <Card uri="https://cdn1.epicgames.com/spt-assets/4c57275be6f1469b9ae10006f7429a81/f1-25-5gfry.jpg"
                    onToggleSave={handleSave} />
            </Carousel>
            <Text style={styles.text}>Popular</Text>
            <Carousel>
                <Card uri="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
                    onToggleSave={handleSave} />

                <Card uri="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png"
                    onToggleSave={handleSave} />

                <Card uri="https://image.api.playstation.com/cdn/UP0177/CUSA00363_00/uyYz2NhJU4DXr7asqSb6S3fsQjIs9475.png"
                    onToggleSave={handleSave} />
            </Carousel>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 15,
        paddingHorizontal: 10,
        paddingBottom: 30,
    },

    text: {
        color: "#fff",
        fontSize: 21,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: 10,
    },

    card: {
        backgroundColor: "white",
        width: 150,
        height: 200,
    },
})