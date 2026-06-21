import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GameBanner() {
    const uri =
        "https://store-images.s-microsoft.com/image/apps.24935.13758467164481545.c998f207-34a5-4a78-8843-178e2acdf371.206793b9-f38b-4616-8029-fdb3c7d0db77?h=1280";


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
                        colors={["rgba(0,0,0,0)", "rgba(0, 0, 0, 0.46)"]}
                        style={StyleSheet.absoluteFillObject}
                    />
                    <View style={styles.overlay} />

                    <View style={styles.textContainer}>
                        <BlurView intensity={1} tint="dark" style={styles.blur}>
                            <Text style={styles.title}>Forza Horizon 6</Text>
                            <Text style={styles.subtitle}>Descubra as paisagens do Japão </Text>
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
        opacity: 0.12,
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
        backgroundColor: "rgba(0, 0, 0, 0)",
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
        fontSize: 22.5,
        fontWeight: "700",
    },
    subtitle: {
        color: "#ddd",
        fontSize: 14,
        marginTop: 4,
    },
});
