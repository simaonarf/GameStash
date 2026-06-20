import { AirbnbRating } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface ReviewCardProps {
    id: number;
    title?: string;
    description?: string;
    rating?: number;
    game_id: number;
    user_id: number;
}

export default function ReviewCard({
    id,
    title,
    description,
    rating,
    game_id,
    user_id,
}: ReviewCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.section}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.username}>//username: {user_id}</Text>
            </View>

            <Text style={styles.description}>{description}</Text>

            <View style={styles.ratingContainer}>
                <AirbnbRating
                    count={5}
                    defaultRating={rating}
                    size={18}
                    isDisabled={true}
                    showRating={false}
                    selectedColor="#FFB300"
                    unSelectedColor="#4A4A4A"
                    starContainerStyle={styles.starContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2D2D2D',
        borderRadius: 32,
        paddingVertical: 22,
        paddingHorizontal: 26,
        width: '100%',
        maxWidth: 280,
        alignSelf: 'center',
        margin: 5
    },
    section: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    title: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        letterSpacing: 0.5,
    },

    username: {
        color: '#acacac',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        paddingTop: 8
    },

    description: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 12,
    },
    ratingContainer: {
        alignItems: 'flex-start',
        marginTop: 4,
    },
    starContainer: {
        paddingVertical: 0,
        gap: 4,
    },
});