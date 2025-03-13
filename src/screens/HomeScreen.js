import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import CountryCard from '../components/CountryCard';
import countries from '../data/countries';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ülkeleri Keşfet</Text>
            <FlatList
                data={countries}
                renderItem={({ item }) => (
                    <CountryCard
                        country={item}
                        onPress={() => navigation.navigate('CityDetails', {
                            countryId: item.id,
                            countryName: item.name
                        })}
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2d3436',
    },
});

export default HomeScreen;