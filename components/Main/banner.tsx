import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GameBanner() {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <ImageBackground
                source={{ uri: "https://blackheartprints.com/cdn/shop/files/CallOfDutyBlackOps62024GamePosterLandscapeWeb_600x.jpg?v=1717361285" }}
                style={styles.image}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.overlay} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Call of Duty: BO7 Beta</Text>
                    <Text style={styles.subtitle}>Lorem ipsum dolor</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        overflow: "hidden",
        marginHorizontal: 1,
        marginVertical: 8,
    },
    image: {
        width: "100%",
        height: 200,
        justifyContent: "flex-end",
    },
    imageStyle: {
        borderRadius: 16,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    textContainer: {
        padding: 16,
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    subtitle: {
        color: "#ddd",
        fontSize: 14,
        marginTop: 4,
    },
});
