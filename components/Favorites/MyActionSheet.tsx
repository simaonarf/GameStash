import games from "@/services/games";
import { useActionSheet } from "@expo/react-native-action-sheet";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CategoryCard from "./CategoryCard";

const initialGenres = Array.from(new Set(games.flatMap((g) => g.data.map((d) => d.genre))));

export default function List() {
  const { showActionSheetWithOptions } = useActionSheet();

  const [selectedOption, setSelectedOption] = useState("Relevância");

  const options = ["Cancelar", "Alfabeticamente (A-Z)", "Alfabeticamente (Z-A)", "Relevância"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 3;

  const getSortedGenres = () => {
    const sortedGenres = [...initialGenres];

    if (selectedOption === "Alfabeticamente (A-Z)") {
      return sortedGenres.sort((a, b) => a.localeCompare(b));
    }

    if (selectedOption === "Alfabeticamente (Z-A)") {
      return sortedGenres.sort((a, b) => b.localeCompare(a));
    }

    return initialGenres;
  };

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (typeof buttonIndex === "number" && buttonIndex !== 0) {
          const selectedValue = options[buttonIndex];
          setSelectedOption(selectedValue);
        }
      }
    );
  };

  const genresToRender = getSortedGenres();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.fullContainer}>
        <View style={styles.header}>

        </View>

        <FlatList
          data={genresToRender}
          renderItem={({ item }) => <CategoryCard name={item} />}
          keyExtractor={(item) => item}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
        />

        <TouchableOpacity onPress={handleOpen} style={styles.sortButton}>
          <Text style={styles.sortButtonText}>Ordenar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  listContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white"
  },
  sortButton: {
    position: 'absolute',
    backgroundColor: "#f7c222",
    borderRadius: 10,
    left: "50%",
    transform: [{ translateX: -75 }],
    bottom: 20,
    right: 20,
    alignSelf: "center",
    paddingVertical: 12,
  },
  sortButtonText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center"
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
});