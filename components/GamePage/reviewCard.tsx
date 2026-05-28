import { AirbnbRating } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ReviewCardProps {
    title?: string;
    description?: string;
    rating?: number;
}

export default function ReviewCard({
    title = "OK... I THINK",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing...more",
    rating = 5,
}: ReviewCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

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
        paddingVertical: 24,
        paddingHorizontal: 28,
        width: '100%',
        maxWidth: 300,
        alignSelf: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        letterSpacing: 0.5,
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