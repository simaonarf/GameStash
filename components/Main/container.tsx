import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GameBanner from "./banner";
import Carousel from "./carousel";

export default function Container() {
    return (
        <View style={styles.container}>

            <GameBanner></GameBanner>

            <Text style={styles.text}>Novidades da Semana</Text>
            <Carousel>
                <Image
                    style={styles.card}
                    source={{
                        uri: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2503/d975a2a2d80276d9891d8d3430fb8ec7ed2e4ad807707e76.png",
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: "https://m.media-amazon.com/images/M/MV5BODA2YzRkODktNTIwYi00ZDk1LThlMTAtYzE4MGEyODM4NzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: "https://cdn1.epicgames.com/spt-assets/4c57275be6f1469b9ae10006f7429a81/f1-25-5gfry.jpg",
                    }}
                />
            </Carousel>
            <Text style={styles.text}>Popular</Text>
            <Carousel>
                <Image
                    style={styles.card}
                    source={{
                        uri: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png",
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: "https://image.api.playstation.com/cdn/UP0177/CUSA00363_00/uyYz2NhJU4DXr7asqSb6S3fsQjIs9475.png",
                    }}
                />
            </Carousel>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        margin: 10,
    },

    text: {
        flexDirection: "row",
        color: "#fff",
        fontSize: 21,
        fontWeight: "bold",
        alignSelf: "flex-start"
    },

    card: {
        backgroundColor: "white",
        width: 150,
        height: 200,
    },
})