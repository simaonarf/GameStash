import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GameBanner() {
    const uri =
        "https://blackheartprints.com/cdn/shop/files/CallOfDutyBlackOps62024GamePosterLandscapeWeb_600x.jpg?v=1717361285";


    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri }}
                style={styles.blurBackground}
                blurRadius={40}
            />

            <TouchableOpacity style={styles.container} activeOpacity={0.8}>
                <ImageBackground
                    source={{ uri }}
                    style={styles.image}
                    imageStyle={styles.imageStyle}
                >
                    <LinearGradient
                        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]}
                        style={StyleSheet.absoluteFillObject}
                    />
                    <View style={styles.overlay} />

                    <View style={styles.textContainer}>
                        <BlurView intensity={25} tint="dark" style={styles.blur}>
                            <Text style={styles.title}>Call of Duty: BO7 Beta</Text>
                            <Text style={styles.subtitle}>Lorem ipsum dolor</Text>
                        </BlurView>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 1,
        marginVertical: 30,
        paddingBottom: 6,
    },
    container: {
        borderRadius: 16,
        overflow: "hidden",
        marginHorizontal: 1,
        marginVertical: 8,
    },
    blurBackground: {
        position: "absolute",
        top: 5,
        left: 0,
        right: 0,
        height: 200,
        transform: [{ scale: 1.35 }],
        opacity: 0.39,
        borderRadius: 16,
    },
    image: {
        width: "100%",
        height: 200,
        justifyContent: "flex-end",
    },
    imageStyle: {
        borderRadius: 16,
    },

    blur: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: "rgba(0,0,0,0.25)",
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
