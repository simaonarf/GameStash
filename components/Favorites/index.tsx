import theme from "@/constants/theme";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import React from "react";
import { StyleSheet, Text } from "react-native";
import List from "./list";
import MyComponent from "./MyActionSheet";

export default function Favorite() {
    return (
        <>
            <Text style={styles.text}>Explorar</Text>
            <List></List>
            <ActionSheetProvider>
                <MyComponent />
            </ActionSheetProvider>

        </>
    );
}

const styles = StyleSheet.create({
    text: {
        flexDirection: "row",
        color: "white",
        padding: theme.dimension.xs,
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
})