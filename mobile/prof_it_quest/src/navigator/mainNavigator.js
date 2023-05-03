import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SingInScreen from '../screen/auth/singinScreen';
import SingUpScreen from '../screen/auth/singupScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="main">
                <Stack.Screen name="main" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="singin" component={SingInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="singup" component={SingUpScreen} options={{ headerShown: false }} />
            </Stack.Navigator> 
        </NavigationContainer>
    )
}

export default MainNavigator;