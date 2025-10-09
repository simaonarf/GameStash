import games from "@/services/games";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryCard from "./CategoyCard";

export default function List() {
    const genres = Array.from(new Set(games.flatMap((g) => g.data.map((d) => d.genre))));

    return (

        <FlatList
            data={genres}
            renderItem={({ item }) => <CategoryCard name={item} />}
            keyExtractor={(item) => item}
            numColumns={2}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            style={styles.container}
        />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 12,
    },
});
