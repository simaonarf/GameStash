import { games } from "@/services/games";
import { Button } from "@andresjesse/bobber-ui";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import GamePoster from "./gamePoster";
import ReviewCard from "./reviewCard";

export default function GamePage() {
    const { id } = useLocalSearchParams();

    const game = games.find(g => g.id === Number(id));

    if (!game) return <Text>Game não encontrado</Text>;

    return (
        <ScrollView>

            <View style={styles.container}>

                <GamePoster></GamePoster>

                <Text style={styles.text}>{game.title}</Text>
                <Text style={styles.subText}>{game.description}</Text>


                <View style={styles.statusContainer}>
                    <View style={styles.row}>
                        <View>
                            <Button title={game.status ?? "Sem status"} size="lg" variant="light" color="red">
                            </Button>
                        </View>
                        <View>
                            <Button title="6.7" size="lg" variant="light" color="yellow"></Button>
                        </View>
                        <View>
                            <Button title="5" size="lg" variant="light" color="gray"></Button>
                        </View>
                    </View>
                </View>

                <Text style={styles.text}>Reviews</Text>

                <ReviewCard></ReviewCard>
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
        justifyContent: 'center'
    },

    row: {
        flexDirection: 'row',
        gap: 45
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

})