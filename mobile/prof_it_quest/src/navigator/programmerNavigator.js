import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProgrammeresScreen from '../screen/popular/programmeresScreen';
import ProgrammerScreen from '../screen/popular/programmerScreen';

const Stack = createNativeStackNavigator();


const ProgrammerNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="programmeres">
            <Stack.Screen name="programmeres" component={ProgrammeresScreen} options={{ headerShown: false }} />
            <Stack.Screen name="programmer" component={ProgrammerScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ProgrammerNavigator;