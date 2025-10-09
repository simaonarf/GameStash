import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    name: string;
};

export default function CategoryCard({ name }: Props) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1c1c1c",
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginHorizontal: 6,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    text: {
        color: "#d1d1d1",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },
});
