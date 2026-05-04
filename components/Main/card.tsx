import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";

export interface CardGameProps {
    id: number,
    title: string,
    description?: string,
    status?: string,
    uri: string,
    bookmark?: boolean
    onToggleSave?: (id: number, value: boolean) => void;
}

export default function Card(
    { id, title, uri, bookmark, onToggleSave }: CardGameProps) {
    const [saved, setSaved] = useState(bookmark ?? false);


    const scaleAnim = useRef(new Animated.Value(1)).current;

    function handleCardPress() {
        router.push({ pathname: "/game/[id]", params: { id: String(id), title: String(title) } });
    }

    function handlePress() {
        const newState = !saved;
        setSaved(newState);
        if (onToggleSave) {
            onToggleSave(id, newState);
        }

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
        <Pressable onPress={handleCardPress}>
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
        </Pressable>
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
