import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import countries from '../data/countries';

// CultureTab.js
const CultureTab = ({ route }) => {
    const country = countries.find(c => c.id === route.params.countryId);

    return (
        <View style={styles.tabContainer}>
            {/* Kültür İpuçları */}
            <Text style={styles.sectionTitle}>Kültür İpuçları 🧿</Text>
            {country.cultureTips.map((tip, index) => (
                <View key={index} style={styles.tipCard}>
                    <Text style={styles.tipText}>• {tip}</Text>
                </View>
            ))}

            {/* Yerel Lezzetler */}
            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Yerel Lezzetler 🍴</Text>
            {country.localEats.map((eat, index) => (
                <View key={index} style={styles.eatCard}>
                    <Image source={eat.image} style={styles.eatImage} />
                    <Text style={styles.eatName}>{eat.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default CultureTab;
const styles = StyleSheet.create({
    // CultureTab.js-də eatImage stili
    eatImage: {
        width: '100%',
        height: 200, // Şəkilin hündürlüyü
        resizeMode: 'cover',
        borderRadius: 10,
    }
});