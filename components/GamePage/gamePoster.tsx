import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function GamePoster(uri: any) {

    return (
        <View style={styles.glowContainer}>
            <Image
                source={uri}
                style={styles.backgroundImage}
                blurRadius={45}
            />

            <View style={styles.card}>
                <Image source={uri} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    glowContainer: {
        width: 150,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 10,
    },

    backgroundImage: {
        position: 'absolute',
        width: '110%',
        height: '100%',
        transform: [{ scale: 1.1 }],
        opacity: 0.2,
        borderRadius: 35
    },

    card: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        overflow: "hidden",
    },

    image: {
        width: '100%',
        height: '100%',
    },
})