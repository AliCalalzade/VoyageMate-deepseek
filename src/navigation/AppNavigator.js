import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CityDetailsScreen from '../screens/CityDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#e74c3c' },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'VoyageMate' }}
            />
            <Stack.Screen
                name="CityDetails"
                component={CityDetailsScreen}
                options={({ route }) => ({ title: route.params.countryName })}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;