import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import countries from '../data/countries';
import CityCard from '../components/CityCard';

// ŞEHİRLER TAB
function CitiesTab({ route }) {
    const { countryId } = route.params;
    const country = countries.find(c => c.id === countryId);
    console.log('Şehirler Tab Açıldı:', country.cities)
    // Şehir yoxdursa error mesajı
    if (!country?.cities?.length) {
        return (
            <View style={styles.tabContainer}>
                <Text style={styles.errorText}>Bu ölkə üçün şəhər tapılmadı.</Text>
            </View>
        );
    }

    return (
        <View style={styles.tabContainer}>
            <FlatList
                data={country.cities}
                renderItem={({ item }) => <CityCard city={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

// KÜLTÜR & YEMEK TAB
function CultureTab({ route }) {
    const { countryId } = route.params;
    const country = countries.find(c => c.id === countryId);
    console.log('Kültür Tab Açıldı:', country.cultureTips)
    return (
        <View style={styles.tabContainer}>
            {/* Kültür İpuçları */}
            <Text style={styles.sectionTitle}>Kültür İpuçları 🧿</Text>
            {country?.cultureTips?.map((tip, index) => (
                <View key={index} style={styles.tipCard}>
                    <Text style={styles.tipText}>• {tip}</Text>
                </View>
            ))}

            {/* Yerel Lezzetler */}
            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Yerel Lezzetler 🍴</Text>
            {country?.localEats?.map((eat, index) => (
                <View key={index} style={styles.eatCard}>
                    <Image source={eat.image} style={styles.eatImage} />
                    <Text style={styles.eatName}>{eat.name}</Text>
                </View>
            ))}
        </View>
    );
};

// TEMEL KELİMELER TAB
function PhrasesTab({ route }) {
    const { countryId } = route.params;
    const country = countries.find(c => c.id === countryId);
    console.log('Kelimeler Tab Açıldı:', country.phrases)
    return (
        <View style={styles.tabContainer}>
            {country?.phrases?.map((phrase, index) => (
                <View key={index} style={styles.phraseCard}>
                    <Text style={styles.phraseTurkish}>{phrase.turkish}</Text>
                    <Text style={styles.phraseEnglish}>{phrase.english}</Text>
                </View>
            ))}
        </View>
    );
};

// TAB NAVIGATOR
const Tab = createMaterialTopTabNavigator();

const CityDetailsScreen = ({ route }) => {
    // Parametr yoxlaması
    const countryId = route.params?.countryId;
    if (!countryId) {
        return (
            <View style={styles.tabContainer}>
                <Text style={styles.errorText}>Ölkə ID-si tapılmadı!</Text>
            </View>
        );
    }

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    textTransform: 'none', // BAŞLIQLAR BÖYÜK HƏRFLƏ OLMASIN
                    fontSize: 14
                },
                tabBarIndicatorStyle: { backgroundColor: '#e74c3c' },
            }}
        >
            <Tab.Screen
                name="Şehirler"
                component={CitiesTab}
                initialParams={{ countryId }} // Parametr ötürülür
            />
            <Tab.Screen
                name="Kültür & Yemek"
                component={CultureTab}
                initialParams={{ countryId }}
            />
            <Tab.Screen
                name="Temel Kelimeler"
                component={PhrasesTab}
                initialParams={{ countryId }}
            />
        </Tab.Navigator>
    );
};

// STİLLƏR
const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2d3436',
        marginBottom: 15,
    },
    tipCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    tipText: {
        fontSize: 14,
        color: '#2d3436',
    },
    eatCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 2,
    },
    eatImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    eatName: {
        padding: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#2d3436',
    },
    phraseCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    phraseTurkish: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    phraseEnglish: {
        fontSize: 14,
        color: '#636e72',
        marginTop: 5,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default CityDetailsScreen;