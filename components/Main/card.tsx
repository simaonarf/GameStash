import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useRef, useState } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";

export default function Card({
    uri,
    onToggleSave,
}: {
    uri: string;
    onToggleSave: (saved: boolean) => void;
}) {
    const [saved, setSaved] = useState(false);

    const scaleAnim = useRef(new Animated.Value(1)).current;

    function handlePress() {
        const newState = !saved;
        setSaved(newState);
        onToggleSave(newState);

        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.4,
                duration: 120,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 120,
                useNativeDriver: true,
            }),
        ]).start();
    }

    return (
        <View style={styles.cardContainer}>

            <Pressable style={styles.saveButton} onPress={handlePress} testID="bookmark">
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <FontAwesome
                        name={saved ? "bookmark" : "bookmark-o"}
                        size={18}
                        color="white"
                    />
                </Animated.View>
            </Pressable>

            <Image source={{ uri }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
    },

    saveButton: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderRadius: 20,
        padding: 6,
    },

    image: {
        width: 140,
        height: 200,
        borderRadius: 12,
    },
});
