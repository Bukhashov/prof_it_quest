import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModuleScreen from '../screen/kvest/moduleScreen';
import ThameScreen from '../screen/kvest/thameScreen';
import InfoScreen from '../screen/kvest/infoScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="kvests">
            <Stack.Screen name="kvests" component={ModuleScreen} options={{ headerShown: false }} />
            <Stack.Screen name="thames" component={ThameScreen} options={{ headerShown: false }} />
            <Stack.Screen name="info" component={InfoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeNavigator;