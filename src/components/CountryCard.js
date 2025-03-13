import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const CountryCard = ({ country, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={country.image} style={styles.image} />
            <Text style={styles.name}>{country.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    name: {
        padding: 12,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: '#2d3436',
    },
});

export default CountryCard;