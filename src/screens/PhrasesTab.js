import React from 'react';
import { View, Text } from 'react-native';
import countries from '../data/countries';

const PhrasesTab = ({ route }) => {
    const country = countries.find(c => c.id === route.params.countryId);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            {country.phrases.map((phrase, index) => (
                <View key={index} style={{ marginBottom: 10 }}>
                    <Text style={{ color: '#e74c3c', fontWeight: 'bold' }}>{phrase.turkish}</Text>
                    <Text>{phrase.english}</Text>
                </View>
            ))}
        </View>
    );
};

export default PhrasesTab;