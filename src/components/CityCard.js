import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CityCard = ({ city }) => {
    return (
        <View style={styles.container}>
            <Image source={city.image} style={styles.image} />
            <Text style={styles.name}>{city.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 2,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    name: {
        padding: 12,
        fontSize: 16,
        fontWeight: '500',
        color: '#2d3436',
    },
});

export default CityCard;