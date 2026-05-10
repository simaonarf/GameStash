import { games } from "@/services/games";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GameBanner from "./banner";
import Card from "./card";
import Carousel from "./carousel";

export default function Container() {

    const [savedGames, setSavedGames] = useState<Record<number, boolean>>({});

    function handleSave(id: number, value: boolean) {
        setSavedGames(prev => {
            const updated = { ...prev, [id]: value };
            console.log("Bookmark feito para ID:", id);
            console.log("Estado atual:", updated);
            return updated;
        });
    }

    return (
        <View style={styles.container}>

            <GameBanner></GameBanner>

            <Text style={styles.text}>Novidades da Semana</Text>
            <Carousel>
                {
                    games.map(item => <Card
                        id={item.id}
                        title={item.title}
                        uri={item.uri}
                        bookmark={savedGames[item.id] ?? false}

                    />)
                }
            </Carousel>
            <Text style={styles.text}>Popular</Text>

            <Carousel>
                {
                    games.filter(games => games.id >= 4 && games.id <= 7).map(item => <Card
                        id={item.id}
                        title={item.title}
                        uri={item.uri}
                        bookmark={savedGames[item.id] ?? false}
                    />)
                }
            </Carousel>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 15,
        paddingHorizontal: 10,
        paddingBottom: 30,
    },

    text: {
        color: "#fff",
        fontSize: 22.5,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: 10,
    },

    card: {
        backgroundColor: "white",
        width: 150,
        height: 200,
    },
})