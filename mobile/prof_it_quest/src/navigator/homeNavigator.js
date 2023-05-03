import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/mainScreen';


const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="kvests">
            <Stack.Screen name="kvests" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="thames" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="test" component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeNavigator;