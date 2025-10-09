import theme from "@/constants/theme";
import React, { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Carousel({ children }: PropsWithChildren) {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.cardsRow}>
                {children}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.dimension.sm,
    },
    cardsRow: {
        flexDirection: "row",
        gap: 15,
    },
});
