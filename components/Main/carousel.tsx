import theme from "@/constants/theme";
import React, { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Carousel({ children }: PropsWithChildren) {
    return (
        <View style={styles.cardWrapper}>
            <ScrollView
                horizontal
                testID="carousel"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardsRow}
            >
                {React.Children.map(children, (child, index) => (
                    <View style={styles.cardItem} key={index}>
                        {child}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: "100%",
        paddingVertical: theme.dimension.sm,
    },

    cardsRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: theme.dimension.xs,
    },

    cardItem: {
        marginRight: 15,
    },
});
