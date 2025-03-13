import React from 'react';
import { FlatList, Text, View } from 'react-native';
import countries from '../data/countries';
import CityCard from '../components/CityCard';
const CitiesTab = ({ route }) => {
    const country = countries.find(c => c.id === route.params.countryId);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={country.cities}
                renderItem={({ item }) => <CityCard city={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default CitiesTab;