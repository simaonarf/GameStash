import GameRepository, { Game } from "@/src/database/GameRepository";
import ReviewRepository, { Review } from "@/src/database/ReviewRepository";

import { Button } from "@andresjesse/bobber-ui";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import GamePoster from "./gamePoster";
import ReviewCard from "./reviewCard";

export default function GamePage() {
    const { id } = useLocalSearchParams();

    const [game, setGame] = useState<Game | null>(null);
    const [gameReviews, setGameReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    const gameRepository = useMemo(() => new GameRepository(), []);
    const reviewRepository = useMemo(() => new ReviewRepository(), []);

    useEffect(() => {
        async function fetchGame() {
            try {
                if (!id) return;

                const fetchedGame = await gameRepository.find(Number(id));
                setGame(fetchedGame);

                if (fetchedGame) {
                    const fetchedReviews = await reviewRepository.findByGameId(fetchedGame.id);
                    setGameReviews(fetchedReviews);
                }
            } catch (error) {
                console.error("Erro ao carregar os detalhes do jogo:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchGame();
    }, [id]);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!game) {
        return (
            <View>
                <Text>Game não encontrado</Text>
            </View>
        );
    }


    return (
        <ScrollView>

            <View style={styles.container}>

                <GamePoster uri={game.uri}></GamePoster>

                <Text style={styles.text}>{game.title}</Text>
                <Text style={styles.subText}>{game.description}</Text>


                <View style={styles.statusContainer}>
                    <View style={styles.row}>
                        <View style={styles.statusItem}>
                            <Button title={game.status ?? "Sem status"} size="lg" variant="light" color="red">
                            </Button>
                        </View>
                        <View style={styles.statusItem}>
                            <Button title="3.7" size="lg" variant="light" color="yellow"></Button>
                        </View>
                        <View style={styles.statusItem}>
                            <Button title="5" size="lg" variant="light" color="gray"></Button>
                        </View>
                    </View>
                </View>

                <Text style={styles.text}>Reviews</Text>

                <ScrollView horizontal={true} >
                    {
                        gameReviews.map(item => <ReviewCard
                            key={item.id}
                            id={item.id}
                            title={item.title ?? undefined}
                            description={item.comment ?? undefined}
                            rating={item.rating}
                            game_id={item.game_id}
                            user_id={item.user_id}
                        />)
                    }
                </ScrollView>
            </View>
        </ScrollView>
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

    statusContainer: {
        justifyContent: 'center',
        width: '100%'
    },

    row: {
        flexDirection: 'row',
        gap: 12,
        width: '100%',
    },

    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginLeft: 10,
    },

    subText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "300",
        textAlign: "center",
        alignSelf: "center",
        marginLeft: 10,
    },

    statusItem: {
        flex: 1,
        alignItems: 'center',
    },


})