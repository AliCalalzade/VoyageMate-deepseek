const countries = [
    {
        id: '1',
        name: 'Türkiye',
        image: require('../assets/images/turkey.png'),
        cities: [
            { id: '1', name: 'İstanbul', image: require('../assets/images/istanbul.jpg') },
            { id: '2', name: 'Kapadokya', image: require('../assets/images/cappadocia.jpg') },
        ],
        cultureTips: [
            'Kahve ikramını reddetmeyin',
            'Cami ziyaretinde başınızı örtün',
        ],
        localEats: [
            { name: 'İskender Kebap', image: require('../assets/images/iskender.jpg') },
            { name: 'Baklava', image: require('../assets/images/baklava.jpg') },
        ],
        phrases: [
            { turkish: 'Merhaba', english: 'Hello' },
            { turkish: 'Teşekkür ederim', english: 'Thank you' },
        ],
    },
];

export default countries;