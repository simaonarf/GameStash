
import { default as React, useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GameBanner from "./banner";
import Card from "./card";
import Carousel from "./carousel";

import { useFocusEffect } from '@react-navigation/native';
import GameRepository, { Game } from "../../src/database/GameRepository";

export default function Container() {
    /* 
        const [savedGames, setSavedGames] = useState<Record<number, boolean>>({});
     */
    const [dbGames, setDbGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    const [savedGames, setSavedGames] = useState<Record<number, boolean>>({});

    const gameRepository = useMemo(() => new GameRepository(), []);

    useFocusEffect(
        useCallback(() => {
            async function fetchGames() {
                try {
                    setLoading(true);
                    const data = await gameRepository.all();
                    setDbGames(data);
                } catch (error) {
                    console.error("Erro ao buscar jogos:", error);
                } finally {
                    setLoading(false);
                }
            }

            fetchGames();
        }, [])
    );

    return (
        <View style={styles.container}>
            <GameBanner></GameBanner>

            <Text style={styles.text}>Novidades da Semana</Text>

            <Carousel>
                {
                    dbGames.filter(games => games.id >= 8 && games.id <= 10).map(item => <Card
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
                    dbGames.filter(games => games.id >= 3 && games.id <= 5).map(item => <Card
                        id={item.id}
                        title={item.title}
                        uri={item.uri}
                        bookmark={savedGames[item.id] ?? false}
                    />)
                }
            </Carousel>

            <Text style={styles.text}>Todos os Jogos</Text>
            <Carousel>
                {
                    dbGames.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            uri={item.uri}
                            bookmark={savedGames[item.id] ?? false}
                        // onSave={handleSave}
                        />
                    ))
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